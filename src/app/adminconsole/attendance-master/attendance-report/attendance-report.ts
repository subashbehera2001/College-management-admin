import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ATTENDANCE_REPORT_DATA, StudentAttendanceReport } from '../student-attendance/data';

@Component({
  selector: 'app-attendance-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance-report.html',
  styleUrl: './attendance-report.scss',
})
export class AttendanceReport implements OnInit {
  reports: StudentAttendanceReport[] = [];
  filteredReports: StudentAttendanceReport[] = [];
  displayedReports: StudentAttendanceReport[] = [];

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;

  get paginationSummaryText(): string {
    const total = this.filteredReports.length;
    if (total === 0) {
      return '0 of 0 pages (0 item)';
    }
    const itemWord = total === 1 ? 'item' : 'items';
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

  searchText = '';
  selectedCourse = '';
  selectedStatus = '';

  courseOptions: string[] = [];

  ngOnInit(): void {
    this.reports = [...ATTENDANCE_REPORT_DATA];
    this.courseOptions = Array.from(new Set(this.reports.map((r) => r.course))).sort();
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredReports = this.reports.filter((r) => {
      const matchSearch = !s || r.rollNo.toLowerCase().includes(s) || r.studentName.toLowerCase().includes(s);
      const matchCourse = !this.selectedCourse || r.course === this.selectedCourse;
      const matchStatus = !this.selectedStatus || r.status === this.selectedStatus;
      return matchSearch && matchCourse && matchStatus;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredReports.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedReports = this.filteredReports.slice(start, start + this.pageSize);
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

  get totalStudents(): number {
    return this.filteredReports.length;
  }

  get eligibleCount(): number {
    return this.filteredReports.filter((r) => r.status === 'Eligible').length;
  }

  get shortageCount(): number {
    return this.filteredReports.filter((r) => r.status === 'Shortage').length;
  }

  get averageAttendance(): string {
    if (this.filteredReports.length === 0) return '0%';
    const total = this.filteredReports.reduce((acc, curr) => acc + curr.percentage, 0);
    return (total / this.filteredReports.length).toFixed(1) + '%';
  }

  exportCSV(): void {
    const headers = ['Roll No', 'Student Name', 'Course', 'Total Classes', 'Attended', 'Percentage', 'Status'];
    const rows = this.filteredReports.map((r) => [r.rollNo, r.studentName, r.course, r.totalClasses, r.attendedClasses, r.percentage + '%', r.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encoded = encodeURI(csvContent);
    const a = document.createElement('a');
    a.href = encoded;
    a.download = 'attendance_report.csv';
    a.click();
  }
}
