import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CourseEnrollmentStat {
  course: string;
  department: string;
  capacity: number;
  enrolled: number;
  active: number;
  retentionRate: number;
}

@Component({
  selector: 'app-student-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-report.html',
  styleUrl: './student-report.scss',
})
export class StudentReport implements OnInit {
  stats: CourseEnrollmentStat[] = [
    { course: 'B.Tech Computer Science', department: 'Computer Science', capacity: 120, enrolled: 118, active: 115, retentionRate: 97.4 },
    { course: 'B.Tech Electronics', department: 'Electronics & Comm.', capacity: 90, enrolled: 84, active: 80, retentionRate: 95.2 },
    { course: 'B.Tech Mechanical', department: 'Mechanical Eng.', capacity: 60, enrolled: 52, active: 48, retentionRate: 92.3 },
    { course: 'BCA', department: 'Computer Science', capacity: 80, enrolled: 76, active: 74, retentionRate: 97.3 },
    { course: 'BBA', department: 'Business Administration', capacity: 60, enrolled: 58, active: 55, retentionRate: 94.8 },
  ];

  filteredStats: CourseEnrollmentStat[] = [];
  displayedStats: CourseEnrollmentStat[] = [];
  selectedDepartment = '';

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;

  get paginationSummaryText(): string {
    const total = this.filteredStats.length;
    if (total === 0) {
      return '0 of 0 pages (0 item)';
    }
    const itemWord = total === 1 ? 'item' : 'items';
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

  departments = ['Computer Science', 'Electronics & Comm.', 'Mechanical Eng.', 'Business Administration'];

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredStats = this.stats.filter(
      (s) => !this.selectedDepartment || s.department === this.selectedDepartment
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filteredStats.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedStats = this.filteredStats.slice(startIndex, startIndex + this.pageSize);
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

  changePageSize(newSize: number | string): void {
    const parsed = Number(newSize);
    this.pageSize = Math.max(1, isNaN(parsed) ? 10 : parsed);
    this.currentPage = 1;
    this.updatePagination();
  }

  exportCSV(): void {
    const headers = ['Course', 'Department', 'Intake Capacity', 'Enrolled', 'Active Students', 'Retention %'];
    const rows = this.filteredStats.map((s) => [s.course, s.department, s.capacity, s.enrolled, s.active, s.retentionRate + '%']);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'student_enrollment_report.csv';
    a.click();
  }
}
