import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultItem, RESULTS_DATA } from '../exam-list/data';

type ColumnFilterField = 'rollNo' | 'studentName' | 'course' | 'semester' | 'grade' | 'status';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results implements OnInit {
  results: ResultItem[] = [];
  filteredResults: ResultItem[] = [];

  searchText = '';
  selectedCourse = '';
  selectedSemester = '';
  selectedResult: ResultItem | null = null;
  showMarksheetModal = false;

  activeFilter: ColumnFilterField | null = null;

  filterValues: Record<ColumnFilterField, string> = {
    rollNo: '',
    studentName: '',
    course: '',
    semester: '',
    grade: '',
    status: '',
  };

  sortField = 'rollNo';
  sortDirection: 'asc' | 'desc' = 'asc';

  courseOptions: string[] = ['B.Tech Computer Science', 'BBA', 'B.Tech Electrical', 'BCA', 'B.Tech Mechanical'];
  semesterOptions: string[] = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];
  gradeOptions: string[] = ['O', 'E', 'A', 'B', 'C', 'D', 'F'];
  statusOptions: string[] = ['Passed', 'Failed'];

  ngOnInit(): void {
    this.results = [...RESULTS_DATA];
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredResults = this.results.filter((r) => {
      const matchSearch = !s || r.rollNo.toLowerCase().includes(s) || r.studentName.toLowerCase().includes(s);
      const matchRollNo = this.matchesContains(r.rollNo, this.filterValues.rollNo);
      const matchStudentName = this.matchesContains(r.studentName, this.filterValues.studentName);
      const matchCourse = this.matchesContains(r.course, this.filterValues.course);
      const matchSemester = this.matchesExact(r.semester, this.filterValues.semester);
      const matchGrade = this.matchesExact(r.grade, this.filterValues.grade);
      const matchStatus = this.matchesExact(r.status, this.filterValues.status);
      return matchSearch && matchRollNo && matchStudentName && matchCourse && matchSemester && matchGrade && matchStatus;
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
    this.filteredResults.sort((a, b) => {
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

  getSortValue(item: ResultItem): string {
    switch (this.sortField) {
      case 'rollNo':
        return item.rollNo;
      case 'studentName':
        return item.studentName;
      case 'course':
        return item.course;
      case 'grade':
        return item.grade;
      case 'status':
        return item.status;
      default:
        return item.rollNo;
    }
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

  viewMarksheet(item: ResultItem): void {
    this.selectedResult = item;
    this.showMarksheetModal = true;
  }

  closeMarksheet(): void {
    this.showMarksheetModal = false;
    this.selectedResult = null;
  }

  printMarksheet(): void {
    window.print();
  }

  exportCSV(): void {
    const headers = ['Roll No', 'Student Name', 'Course', 'Semester', 'Total Marks', 'Percentage', 'CGPA', 'Grade', 'Status'];
    const rows = this.filteredResults.map((r) => [r.rollNo, r.studentName, r.course, r.semester, r.totalMarks, r.percentage + '%', r.cgpa, r.grade, r.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'examination_results.csv';
    a.click();
  }
}
