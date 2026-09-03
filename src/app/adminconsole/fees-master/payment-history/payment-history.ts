import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PAYMENT_HISTORY_DATA, PaymentRecord } from '../fee-collection/data';

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

  modes = ['Cash', 'UPI', 'Card', 'Net Banking'];

  ngOnInit(): void {
    this.payments = [...PAYMENT_HISTORY_DATA];
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredPayments = this.payments.filter((p) => {
      const matchSearch =
        !s ||
        p.receiptNo.toLowerCase().includes(s) ||
        p.studentName.toLowerCase().includes(s) ||
        p.rollNo.toLowerCase().includes(s);
      const matchMode = !this.selectedMode || p.paymentMode === this.selectedMode;
      return matchSearch && matchMode;
    });
  }

  viewReceipt(item: PaymentRecord): void {
    this.selectedReceipt = item;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedReceipt = null;
  }

  printReceipt(): void {
    window.print();
  }

  exportCSV(): void {
    const headers = ['Receipt No', 'Roll No', 'Student Name', 'Course', 'Amount', 'Payment Date', 'Payment Mode', 'Transaction ID', 'Status'];
    const rows = this.filteredPayments.map((p) => [p.receiptNo, p.rollNo, p.studentName, p.course, p.amount, p.paymentDate, p.paymentMode, p.transactionId, p.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'payment_history.csv';
    a.click();
  }
}
