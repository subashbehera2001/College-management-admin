import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MARKS_DATA, StudentMarks } from '../exam-list/data';

type ColumnFilterField = 'rollNo' | 'studentName' | 'grade' | 'status';

@Component({
  selector: 'app-marks-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marks-entry.html',
  styleUrl: './marks-entry.scss',
})
export class MarksEntry implements OnInit {
  selectedExam = 'EXM-2026-S4-END';
  selectedCourse = 'B.Tech Computer Science';
  selectedSemester = 'Semester 4';
  selectedSubject = 'Data Structures & Algorithms';

  examOptions = ['EXM-2026-S4-END - End-Term 2026', 'EXM-2026-S4-MID - Mid-Term 2026'];
  courseOptions = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];
  semesterOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
  subjectOptions = ['Data Structures & Algorithms', 'Operating Systems', 'Database Systems'];

  studentsMarks: StudentMarks[] = [];
  filteredStudentsMarks: StudentMarks[] = [];
  displayedStudentsMarks: StudentMarks[] = [];

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;

  get paginationSummaryText(): string {
    const total = this.filteredStudentsMarks.length;
    if (total === 0) {
      return '0 of 0 pages (0 item)';
    }
    const itemWord = total === 1 ? 'item' : 'items';
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

  savedSuccess = false;

  searchText = '';
  activeFilter: ColumnFilterField | null = null;

  filterValues: Record<ColumnFilterField, string> = {
    rollNo: '',
    studentName: '',
    grade: '',
    status: '',
  };

  sortField = 'rollNo';
  sortDirection: 'asc' | 'desc' = 'asc';

  gradeOptions: string[] = ['O', 'E', 'A', 'B', 'C', 'D', 'F'];
  statusOptions: string[] = ['Pass', 'Fail'];

  ngOnInit(): void {
    this.loadMarks();
  }

  loadMarks(): void {
    this.studentsMarks = JSON.parse(JSON.stringify(MARKS_DATA));
    this.savedSuccess = false;
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredStudentsMarks = this.studentsMarks.filter((item) => {
      const matchSearch =
        !s ||
        item.rollNo.toLowerCase().includes(s) ||
        item.studentName.toLowerCase().includes(s);
      const matchRollNo = this.matchesContains(item.rollNo, this.filterValues.rollNo);
      const matchStudentName = this.matchesContains(item.studentName, this.filterValues.studentName);
      const matchGrade = this.matchesExact(this.getGrade(item), this.filterValues.grade);
      const matchStatus = this.matchesExact(this.getStatus(item), this.filterValues.status);
      return matchSearch && matchRollNo && matchStudentName && matchGrade && matchStatus;
    });

    this.applySort();
    this.totalPages = Math.max(1, Math.ceil(this.filteredStudentsMarks.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedStudentsMarks = this.filteredStudentsMarks.slice(start, start + this.pageSize);
  }

  firstPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(1);
    }
  }

  lastPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.totalPages);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPage(page: number): void {
    if (this.totalPages === 0) {
      this.currentPage = 0;
      this.updatePagination();
      return;
    }
    const targetPage = Math.min(Math.max(page, 1), this.totalPages);
    this.currentPage = targetPage;
    this.updatePagination();
  }

  setPage(page: number): void {
    this.goToPage(page);
  }

  changePageSize(size: number | string): void {
    const parsed = Number(size);
    this.pageSize = Math.max(1, isNaN(parsed) ? 10 : parsed);
    this.currentPage = 1;
    this.applyFilter();
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
    this.filteredStudentsMarks.sort((a, b) => {
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

  getSortValue(item: StudentMarks): string {
    switch (this.sortField) {
      case 'rollNo':
        return item.rollNo;
      case 'studentName':
        return item.studentName;
      case 'grade':
        return this.getGrade(item);
      case 'status':
        return this.getStatus(item);
      default:
        return item.rollNo;
    }
  }

  getTotal(item: StudentMarks): number {
    return (item.internalMarks || 0) + (item.externalMarks || 0);
  }

  getGrade(item: StudentMarks): string {
    const total = this.getTotal(item);
    const max = item.maxInternal + item.maxExternal;
    const pct = (total / max) * 100;
    if (pct >= 90) return 'O';
    if (pct >= 80) return 'E';
    if (pct >= 70) return 'A';
    if (pct >= 60) return 'B';
    if (pct >= 50) return 'C';
    if (pct >= 40) return 'D';
    return 'F';
  }

  getStatus(item: StudentMarks): 'Pass' | 'Fail' {
    return this.getTotal(item) >= 40 ? 'Pass' : 'Fail';
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

  exportCSV(): void {
    const headers = ['Roll No', 'Student Name', 'Internal', 'External', 'Total', 'Grade', 'Status'];
    const rows = this.filteredStudentsMarks.map((item) => [
      item.rollNo,
      item.studentName,
      item.internalMarks,
      item.externalMarks,
      this.getTotal(item),
      this.getGrade(item),
      this.getStatus(item),
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'marks_entry.csv';
    a.click();
  }

  saveMarks(): void {
    this.savedSuccess = true;
    setTimeout(() => (this.savedSuccess = false), 4000);
  }

  resetMarks(): void {
    this.loadMarks();
  }
}
