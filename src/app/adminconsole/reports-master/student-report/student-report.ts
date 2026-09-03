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
  selectedDepartment = '';

  departments = ['Computer Science', 'Electronics & Comm.', 'Mechanical Eng.', 'Business Administration'];

  ngOnInit(): void {
    this.filteredStats = [...this.stats];
  }

  applyFilter(): void {
    this.filteredStats = this.stats.filter(
      (s) => !this.selectedDepartment || s.department === this.selectedDepartment
    );
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
