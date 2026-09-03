import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentRecord, StudentFee, STUDENTS_FEE_DATA } from './data';

@Component({
  selector: 'app-fee-collection',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fee-collection.html',
  styleUrl: './fee-collection.scss',
})
export class FeeCollection implements OnInit {
  studentsFee: StudentFee[] = [];
  selectedStudent: StudentFee | null = null;
  selectedRollNo = 'STU002';

  collectAmount = 20000;
  paymentMode: 'Cash' | 'UPI' | 'Card' | 'Net Banking' = 'UPI';
  referenceId = 'UPI' + Math.floor(10000000 + Math.random() * 90000000);
  remarks = 'Semester tuition fee installment';

  showReceiptModal = false;
  currentReceipt: PaymentRecord | null = null;

  ngOnInit(): void {
    this.studentsFee = [...STUDENTS_FEE_DATA];
    this.onStudentSelect();
  }

  onStudentSelect(): void {
    this.selectedStudent = this.studentsFee.find((s) => s.rollNo === this.selectedRollNo) || null;
    if (this.selectedStudent) {
      this.collectAmount = this.selectedStudent.pendingFee > 0 ? this.selectedStudent.pendingFee : 0;
    }
  }

  processPayment(): void {
    if (!this.selectedStudent || this.collectAmount <= 0) return;

    const receipt: PaymentRecord = {
      receiptNo: 'RCP-2026-' + Math.floor(1000 + Math.random() * 9000),
      rollNo: this.selectedStudent.rollNo,
      studentName: this.selectedStudent.studentName,
      course: this.selectedStudent.course,
      amount: this.collectAmount,
      paymentDate: new Date().toISOString().split('T')[0],
      paymentMode: this.paymentMode,
      transactionId: this.referenceId,
      status: 'Success',
    };

    // Update student pending balance
    this.selectedStudent.paidFee += this.collectAmount;
    this.selectedStudent.pendingFee = Math.max(0, this.selectedStudent.pendingFee - this.collectAmount);

    this.currentReceipt = receipt;
    this.showReceiptModal = true;
  }

  closeReceipt(): void {
    this.showReceiptModal = false;
    this.currentReceipt = null;
    this.referenceId = 'UPI' + Math.floor(10000000 + Math.random() * 90000000);
  }

  printReceipt(): void {
    window.print();
  }
}
