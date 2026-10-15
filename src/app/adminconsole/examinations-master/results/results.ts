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
  displayedResults: ResultItem[] = [];

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;

  get paginationSummaryText(): string {
    const total = this.filteredResults.length;
    if (total === 0) {
      return '0 of 0 pages (0 item)';
    }
    const itemWord = total === 1 ? 'item' : 'items';
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

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
    this.totalPages = Math.max(1, Math.ceil(this.filteredResults.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedResults = this.filteredResults.slice(start, start + this.pageSize);
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
