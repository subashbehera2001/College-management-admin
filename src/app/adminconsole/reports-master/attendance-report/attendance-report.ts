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
  selectedCourse = '';

  courses = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];

  ngOnInit(): void {
    this.filteredMetrics = [...this.metrics];
  }

  applyFilter(): void {
    this.filteredMetrics = this.metrics.filter(
      (m) => !this.selectedCourse || m.course === this.selectedCourse
    );
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
