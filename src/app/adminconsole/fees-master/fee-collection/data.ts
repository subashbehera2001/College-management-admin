export interface StudentFee {
  rollNo: string;
  studentName: string;
  course: string;
  semester: string;
  totalFee: number;
  paidFee: number;
  pendingFee: number;
  dueDate: string;
}

export const STUDENTS_FEE_DATA: StudentFee[] = [
  { rollNo: 'STU001', studentName: 'Rahul Sharma', course: 'B.Tech Computer Science', semester: 'Semester 4', totalFee: 85000, paidFee: 85000, pendingFee: 0, dueDate: '2026-03-31' },
  { rollNo: 'STU002', studentName: 'Priya Verma', course: 'BBA', semester: 'Semester 2', totalFee: 55000, paidFee: 35000, pendingFee: 20000, dueDate: '2026-04-15' },
  { rollNo: 'STU003', studentName: 'Aman Kumar', course: 'B.Tech Electrical', semester: 'Semester 4', totalFee: 80000, paidFee: 40000, pendingFee: 40000, dueDate: '2026-03-31' },
  { rollNo: 'STU004', studentName: 'Sneha Patel', course: 'BCA', semester: 'Semester 4', totalFee: 50000, paidFee: 50000, pendingFee: 0, dueDate: '2026-03-15' },
  { rollNo: 'STU005', studentName: 'Vikram Singh', course: 'B.Tech Mechanical', semester: 'Semester 4', totalFee: 80000, paidFee: 20000, pendingFee: 60000, dueDate: '2026-03-25' },
];

export interface PaymentRecord {
  receiptNo: string;
  rollNo: string;
  studentName: string;
  course: string;
  amount: number;
  paymentDate: string;
  paymentMode: 'Cash' | 'UPI' | 'Card' | 'Net Banking';
  transactionId: string;
  status: 'Success' | 'Pending' | 'Failed';
}

export const PAYMENT_HISTORY_DATA: PaymentRecord[] = [
  { receiptNo: 'RCP-2026-0081', rollNo: 'STU001', studentName: 'Rahul Sharma', course: 'B.Tech Computer Science', amount: 45000, paymentDate: '2026-01-10', paymentMode: 'UPI', transactionId: 'UPI98421054', status: 'Success' },
  { receiptNo: 'RCP-2026-0082', rollNo: 'STU001', studentName: 'Rahul Sharma', course: 'B.Tech Computer Science', amount: 40000, paymentDate: '2026-02-15', paymentMode: 'Net Banking', transactionId: 'TXN77890123', status: 'Success' },
  { receiptNo: 'RCP-2026-0083', rollNo: 'STU002', studentName: 'Priya Verma', course: 'BBA', amount: 35000, paymentDate: '2026-02-01', paymentMode: 'Card', transactionId: 'CRD44129876', status: 'Success' },
  { receiptNo: 'RCP-2026-0084', rollNo: 'STU003', studentName: 'Aman Kumar', course: 'B.Tech Electrical', amount: 40000, paymentDate: '2026-02-18', paymentMode: 'Cash', transactionId: 'CSH-REF-109', status: 'Success' },
  { receiptNo: 'RCP-2026-0085', rollNo: 'STU004', studentName: 'Sneha Patel', course: 'BCA', amount: 50000, paymentDate: '2026-01-22', paymentMode: 'UPI', transactionId: 'UPI77123908', status: 'Success' },
  { receiptNo: 'RCP-2026-0086', rollNo: 'STU005', studentName: 'Vikram Singh', course: 'B.Tech Mechanical', amount: 20000, paymentDate: '2026-03-01', paymentMode: 'UPI', transactionId: 'UPI55610022', status: 'Success' },
];
