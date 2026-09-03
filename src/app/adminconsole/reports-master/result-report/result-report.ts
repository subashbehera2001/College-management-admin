import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CourseResultStat {
  course: string;
  semester: string;
  appeared: number;
  passed: number;
  failed: number;
  passPercentage: number;
  topGradeCount: number;
}

@Component({
  selector: 'app-result-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './result-report.html',
  styleUrl: './result-report.scss',
})
export class ResultReport implements OnInit {
  resultStats: CourseResultStat[] = [
    { course: 'B.Tech Computer Science', semester: 'Semester 3', appeared: 115, passed: 110, failed: 5, passPercentage: 95.6, topGradeCount: 38 },
    { course: 'B.Tech Electronics', semester: 'Semester 3', appeared: 80, passed: 74, failed: 6, passPercentage: 92.5, topGradeCount: 22 },
    { course: 'B.Tech Mechanical', semester: 'Semester 3', appeared: 48, passed: 42, failed: 6, passPercentage: 87.5, topGradeCount: 9 },
    { course: 'BCA', semester: 'Semester 2', appeared: 74, passed: 71, failed: 3, passPercentage: 95.9, topGradeCount: 26 },
    { course: 'BBA', semester: 'Semester 1', appeared: 55, passed: 52, failed: 3, passPercentage: 94.5, topGradeCount: 18 },
  ];

  filteredStats: CourseResultStat[] = [];
  selectedCourse = '';

  courses = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];

  ngOnInit(): void {
    this.filteredStats = [...this.resultStats];
  }

  applyFilter(): void {
    this.filteredStats = this.resultStats.filter(
      (s) => !this.selectedCourse || s.course === this.selectedCourse
    );
  }

  exportCSV(): void {
    const headers = ['Course', 'Semester', 'Appeared', 'Passed', 'Failed', 'Pass Percentage', 'Outstanding/O Grade'];
    const rows = this.filteredStats.map((s) => [s.course, s.semester, s.appeared, s.passed, s.failed, s.passPercentage + '%', s.topGradeCount]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'result_analytics_report.csv';
    a.click();
  }
}
