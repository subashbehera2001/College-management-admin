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
