import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CourseAttendanceMetric {
  course: string;
  semester: string;
  totalClasses: number;
  avgAttendancePct: number;
  studentsEligible: number;
  studentsShortage: number;
}

@Component({
  selector: 'app-reports-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attendance-report.html',
  styleUrl: './attendance-report.scss',
})
export class AttendanceReport implements OnInit {
  metrics: CourseAttendanceMetric[] = [
    { course: 'B.Tech Computer Science', semester: 'Semester 4', totalClasses: 52, avgAttendancePct: 88.4, studentsEligible: 56, studentsShortage: 4 },
    { course: 'B.Tech Computer Science', semester: 'Semester 6', totalClasses: 48, avgAttendancePct: 85.2, studentsEligible: 52, studentsShortage: 6 },
    { course: 'B.Tech Electronics', semester: 'Semester 4', totalClasses: 50, avgAttendancePct: 82.7, studentsEligible: 38, studentsShortage: 5 },
    { course: 'B.Tech Mechanical', semester: 'Semester 4', totalClasses: 46, avgAttendancePct: 79.1, studentsEligible: 28, studentsShortage: 7 },
    { course: 'BCA', semester: 'Semester 2', totalClasses: 44, avgAttendancePct: 91.3, studentsEligible: 42, studentsShortage: 2 },
    { course: 'BBA', semester: 'Semester 2', totalClasses: 45, avgAttendancePct: 86.8, studentsEligible: 36, studentsShortage: 3 },
  ];

  filteredMetrics: CourseAttendanceMetric[] = [];
  displayedMetrics: CourseAttendanceMetric[] = [];
  selectedCourse = '';

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;

  get paginationSummaryText(): string {
    const total = this.filteredMetrics.length;
    if (total === 0) {
      return '0 of 0 pages (0 item)';
    }
    const itemWord = total === 1 ? 'item' : 'items';
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

  courses = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredMetrics = this.metrics.filter(
      (m) => !this.selectedCourse || m.course === this.selectedCourse
    );
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.max(1, Math.ceil(this.filteredMetrics.length / this.pageSize));
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedMetrics = this.filteredMetrics.slice(startIndex, startIndex + this.pageSize);
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
    const headers = ['Course', 'Semester', 'Total Classes', 'Avg Attendance %', 'Eligible Count', 'Shortage Count'];
    const rows = this.filteredMetrics.map((m) => [m.course, m.semester, m.totalClasses, m.avgAttendancePct + '%', m.studentsEligible, m.studentsShortage]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'attendance_analytics_report.csv';
    a.click();
  }
}
