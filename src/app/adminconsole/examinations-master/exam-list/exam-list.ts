import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Exam, EXAMS_DATA } from './data';

type ColumnFilterField = 'name' | 'course' | 'session' | 'startDate' | 'endDate' | 'examType' | 'status';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-list.html',
  styleUrl: './exam-list.scss',
})
export class ExamListComponent implements OnInit {
  private router = inject(Router);

  exams: Exam[] = [];
  filteredExams: Exam[] = [];
  searchText = '';
  selectedStatus = '';
  showDeleteModal = false;
  selectedExam: Exam | null = null;

  activeFilter: ColumnFilterField | null = null;

  filterValues: Record<ColumnFilterField, string> = {
    name: '',
    course: '',
    session: '',
    startDate: '',
    endDate: '',
    examType: '',
    status: '',
  };

  sortField = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  courseOptions: string[] = [];
  typeOptions: string[] = ['Mid-Term', 'End-Term', 'Practical'];
  sessionOptions: string[] = [];
  statusOptions: string[] = ['Upcoming', 'Ongoing', 'Completed'];

  ngOnInit(): void {
    this.exams = [...EXAMS_DATA];
    this.courseOptions = Array.from(new Set(this.exams.map((e) => e.course))).sort();
    this.sessionOptions = Array.from(new Set(this.exams.map((e) => e.session))).sort();
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredExams = this.exams.filter((e) => {
      const matchSearch =
        !s ||
        e.name.toLowerCase().includes(s) ||
        e.course.toLowerCase().includes(s);
      const matchStatus = !this.selectedStatus || e.status === this.selectedStatus;
      const matchName = this.matchesContains(e.name, this.filterValues.name);
      const matchCourse = this.matchesContains(e.course, this.filterValues.course);
      const matchSession = this.matchesExact(e.session, this.filterValues.session);
      const matchStartDate = !this.filterValues.startDate || e.startDate >= this.filterValues.startDate;
      const matchEndDate = !this.filterValues.endDate || e.endDate <= this.filterValues.endDate;
      const matchType = this.matchesExact(e.examType, this.filterValues.examType);
      const matchStatusFilter = this.matchesExact(e.status, this.filterValues.status);
      return (
        matchSearch &&
        matchStatus &&
        matchName &&
        matchCourse &&
        matchSession &&
        matchStartDate &&
        matchEndDate &&
        matchType &&
        matchStatusFilter
      );
    });

    this.applySort();
  }

  matchesContains(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === '' || value.toLowerCase().includes(normalizedFilter);
  }

  matchesExact(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === '' || value.toLowerCase() === normalizedFilter;
  }

  applySort(): void {
    this.filteredExams.sort((a, b) => {
      let aValue = this.getSortValue(a);
      let bValue = this.getSortValue(b);

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }

      if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }

      return 0;
    });
  }

  getSortValue(exam: Exam): string {
    switch (this.sortField) {
      case 'name':
        return exam.name;
      case 'course':
        return exam.course;
      case 'session':
        return exam.session;
      case 'startDate':
        return exam.startDate;
      case 'examType':
        return exam.examType;
      case 'status':
        return exam.status;
      default:
        return exam.name;
    }
  }

  addExam(): void {
    this.router.navigate(['/examinations/exam-list/add-exam']);
  }

  viewExam(e: Exam): void {
    console.log('View exam:', e);
  }

  editExam(e: Exam): void {
    console.log('Edit exam:', e);
  }

  openDeleteModal(e: Exam): void {
    this.selectedExam = e;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedExam = null;
  }

  confirmDelete(): void {
    if (this.selectedExam) {
      this.exams = this.exams.filter((e) => e.code !== this.selectedExam!.code);
      this.applyFilter();
      this.closeDeleteModal();
    }
  }

  exportCSV(): void {
    const headers = ['Exam Code', 'Exam Name', 'Course', 'Semester', 'Session', 'Start Date', 'End Date', 'Type', 'Status'];
    const rows = this.filteredExams.map((e) => [e.code, e.name, e.course, e.semester, e.session, e.startDate, e.endDate, e.examType, e.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'exams_list.csv';
    a.click();
  }

  onSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    this.applyFilter();
  }

  toggleFilter(filter: ColumnFilterField): void {
    this.activeFilter = this.activeFilter === filter ? null : filter;
  }

  closeFilter(): void {
    this.activeFilter = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.activeFilter) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (!target) {
      this.activeFilter = null;
      return;
    }

    if (target.closest('.filter-dropdown') || target.closest('.filter-icon')) {
      return;
    }

    this.activeFilter = null;
  }

  setColumnFilter(field: ColumnFilterField, value: string, closeAfter = false): void {
    this.filterValues[field] = value;
    this.applyFilter();

    if (closeAfter) {
      this.closeFilter();
    }
  }

  clearColumnFilter(field: ColumnFilterField): void {
    this.setColumnFilter(field, '', true);
  }

  hasActiveFilter(field: ColumnFilterField): boolean {
    return this.filterValues[field].trim() !== '';
  }

  getFilterValue(field: ColumnFilterField): string {
    return this.filterValues[field];
  }
}
export { ExamListComponent as ExamList };
