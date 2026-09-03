import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CourseFeeReport {
  course: string;
  totalReceivable: number;
  totalCollected: number;
  pendingDues: number;
  collectionRate: number;
}

@Component({
  selector: 'app-fee-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fee-report.html',
  styleUrl: './fee-report.scss',
})
export class FeeReport implements OnInit {
  feeStats: CourseFeeReport[] = [
    { course: 'B.Tech Computer Science', totalReceivable: 9800000, totalCollected: 8900000, pendingDues: 900000, collectionRate: 90.8 },
    { course: 'B.Tech Electronics', totalReceivable: 6800000, totalCollected: 5950000, pendingDues: 850000, collectionRate: 87.5 },
    { course: 'B.Tech Mechanical', totalReceivable: 4500000, totalCollected: 3800000, pendingDues: 700000, collectionRate: 84.4 },
    { course: 'BCA', totalReceivable: 3800000, totalCollected: 3600000, pendingDues: 200000, collectionRate: 94.7 },
    { course: 'BBA', totalReceivable: 3100000, totalCollected: 2750000, pendingDues: 350000, collectionRate: 88.7 },
  ];

  filteredStats: CourseFeeReport[] = [];
  selectedCourse = '';

  courses = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];

  ngOnInit(): void {
    this.filteredStats = [...this.feeStats];
  }

  applyFilter(): void {
    this.filteredStats = this.feeStats.filter(
      (s) => !this.selectedCourse || s.course === this.selectedCourse
    );
  }

  exportCSV(): void {
    const headers = ['Course', 'Total Receivable (₹)', 'Collected (₹)', 'Pending Dues (₹)', 'Collection Rate %'];
    const rows = this.filteredStats.map((s) => [s.course, s.totalReceivable, s.totalCollected, s.pendingDues, s.collectionRate + '%']);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'fee_collection_report.csv';
    a.click();
  }
}
