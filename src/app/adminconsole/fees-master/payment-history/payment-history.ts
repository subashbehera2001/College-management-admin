import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import { PAYMENT_HISTORY_DATA, PaymentRecord } from '../fee-collection/data';

type ColumnFilterField = 'studentName' | 'rollNo' | 'course' | 'amount' | 'paymentDate' | 'paymentMode' | 'status';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-history.html',
  styleUrl: './payment-history.scss',
})
export class PaymentHistory implements OnInit {
  payments: PaymentRecord[] = [];
  filteredPayments: PaymentRecord[] = [];

  searchText = '';
  selectedMode = '';
  selectedReceipt: PaymentRecord | null = null;
  showModal = false;

  modes: string[] = [];
  statusOptions: string[] = [];

  activeFilter: ColumnFilterField | null = null;

  filterValues: Record<ColumnFilterField, string> = {
    studentName: '',
    rollNo: '',
    course: '',
    amount: '',
    paymentDate: '',
    paymentMode: '',
    status: '',
  };

  sortField = 'paymentDate';
  sortDirection: 'asc' | 'desc' = 'desc';

  courseOptions: string[] = [];

  ngOnInit(): void {
    this.payments = [...PAYMENT_HISTORY_DATA];
    this.courseOptions = Array.from(new Set(this.payments.map((p) => p.course))).sort();
    this.modes = Array.from(new Set(this.payments.map((p) => p.paymentMode))).sort();
    this.statusOptions = Array.from(new Set(this.payments.map((p) => p.status))).sort();
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredPayments = this.payments.filter((p) => {
      const matchSearch =
        !s ||
        p.studentName.toLowerCase().includes(s) ||
        p.rollNo.toLowerCase().includes(s);
      const matchMode = !this.selectedMode || p.paymentMode === this.selectedMode;
      const matchStudentName = this.matchesContains(p.studentName, this.filterValues.studentName) || this.matchesContains(p.rollNo, this.filterValues.studentName);
      const matchCourse = this.matchesContains(p.course, this.filterValues.course);
      const matchAmount = this.matchesAmount(p.amount, this.filterValues.amount);
      const matchPaymentDate = this.matchesExact(p.paymentDate, this.filterValues.paymentDate);
      const matchPaymentMode = this.matchesExact(p.paymentMode, this.filterValues.paymentMode);
      const matchStatus = this.matchesExact(p.status, this.filterValues.status);
      return matchSearch && matchMode && matchStudentName && matchCourse && matchAmount && matchPaymentDate && matchPaymentMode && matchStatus;
    });

    this.applySort();
  }

  matchesContains(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === '' || value.toLowerCase().includes(normalizedFilter);
  }

  matchesExact(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === '' || value.toLowerCase() === normalizedFilter;
  }

  matchesAmount(value: number, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim();
    return normalizedFilter === '' || value.toString() === normalizedFilter;
  }

  applySort(): void {
    this.filteredPayments.sort((a, b) => {
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

  getSortValue(item: PaymentRecord): string {
    switch (this.sortField) {
      case 'studentName':
        return item.studentName;
      case 'course':
        return item.course;
      case 'amount':
        return item.amount.toString();
      case 'paymentDate':
        return item.paymentDate;
      case 'paymentMode':
        return item.paymentMode;
      case 'status':
        return item.status;
      default:
        return item.paymentDate;
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

  viewReceipt(item: PaymentRecord): void {
    this.selectedReceipt = item;
    this.showModal = true;
  }

  editPayment(item: PaymentRecord): void {
    this.selectedReceipt = item;
    this.showModal = true;
  }

  deletePayment(item: PaymentRecord): void {
    const index = this.payments.findIndex((p) => p.receiptNo === item.receiptNo);
    if (index !== -1) {
      this.payments.splice(index, 1);
      this.applyFilter();
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedReceipt = null;
  }

  printReceipt(): void {
    window.print();
  }

  exportCSV(): void {
    const headers = ['Roll No', 'Student Name', 'Course', 'Amount', 'Payment Date', 'Payment Mode', 'Status'];
    const rows = this.filteredPayments.map((p) => [p.rollNo, p.studentName, p.course, p.amount, p.paymentDate, p.paymentMode, p.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'payment_history.csv';
    a.click();
  }

  exportExcel(): void {
    const headers = ['Roll No', 'Student Name', 'Course', 'Amount', 'Payment Date', 'Payment Mode', 'Status'];
    const rows = this.filteredPayments.map((p) => [p.rollNo, p.studentName, p.course, p.amount, p.paymentDate, p.paymentMode, p.status]);
    const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Payment History');
    XLSX.writeFile(wb, 'payment_history.xlsx');
  }

  exportPDF(): void {
    const headers = ['Roll No', 'Student Name', 'Course', 'Amount', 'Payment Date', 'Payment Mode', 'Status'];
    const rows = this.filteredPayments.map((p) => [p.rollNo, p.studentName, p.course, p.amount, p.paymentDate, p.paymentMode, p.status]);
    const doc = new jspdf.jsPDF();
    doc.text('Payment History', 14, 15);
    (doc as any).autoTable({ head: [headers], body: rows, startY: 20 });
    doc.save('payment_history.pdf');
  }
}
