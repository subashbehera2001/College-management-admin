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
  displayedStats: CourseFeeReport[] = [];
  selectedCourse = '';

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

  courses = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredStats = this.feeStats.filter(
      (s) => !this.selectedCourse || s.course === this.selectedCourse
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
    const headers = ['Course', 'Total Receivable (₹)', 'Collected (₹)', 'Pending Dues (₹)', 'Collection Rate %'];
    const rows = this.filteredStats.map((s) => [s.course, s.totalReceivable, s.totalCollected, s.pendingDues, s.collectionRate + '%']);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'fee_collection_report.csv';
    a.click();
  }
}
