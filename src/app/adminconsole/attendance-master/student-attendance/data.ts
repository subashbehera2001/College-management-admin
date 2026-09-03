export interface AttendanceRecord {
  rollNo: string;
  studentName: string;
  status: 'Present' | 'Absent' | 'Late';
  remarks?: string;
}

export const INITIAL_STUDENTS_ATTENDANCE: AttendanceRecord[] = [
  { rollNo: 'STU001', studentName: 'Rahul Sharma', status: 'Present' },
  { rollNo: 'STU002', studentName: 'Priya Verma', status: 'Present' },
  { rollNo: 'STU003', studentName: 'Aman Kumar', status: 'Absent', remarks: 'Medical reason' },
  { rollNo: 'STU004', studentName: 'Sneha Patel', status: 'Present' },
  { rollNo: 'STU005', studentName: 'Vikram Singh', status: 'Late', remarks: 'Bus delay' },
  { rollNo: 'STU006', studentName: 'Ananya Dash', status: 'Present' },
  { rollNo: 'STU007', studentName: 'Rohan Gupta', status: 'Present' },
  { rollNo: 'STU008', studentName: 'Pooja Jena', status: 'Absent' },
];

export interface StudentAttendanceReport {
  rollNo: string;
  studentName: string;
  course: string;
  totalClasses: number;
  attendedClasses: number;
  percentage: number;
  status: 'Eligible' | 'Shortage';
}

export const ATTENDANCE_REPORT_DATA: StudentAttendanceReport[] = [
  { rollNo: 'STU001', studentName: 'Rahul Sharma', course: 'B.Tech Computer Science', totalClasses: 48, attendedClasses: 45, percentage: 93.75, status: 'Eligible' },
  { rollNo: 'STU002', studentName: 'Priya Verma', course: 'BBA', totalClasses: 44, attendedClasses: 41, percentage: 93.18, status: 'Eligible' },
  { rollNo: 'STU003', studentName: 'Aman Kumar', course: 'B.Tech Electrical', totalClasses: 46, attendedClasses: 31, percentage: 67.39, status: 'Shortage' },
  { rollNo: 'STU004', studentName: 'Sneha Patel', course: 'BCA', totalClasses: 42, attendedClasses: 38, percentage: 90.48, status: 'Eligible' },
  { rollNo: 'STU005', studentName: 'Vikram Singh', course: 'B.Tech Mechanical', totalClasses: 48, attendedClasses: 32, percentage: 66.67, status: 'Shortage' },
  { rollNo: 'STU006', studentName: 'Ananya Dash', course: 'B.Tech Computer Science', totalClasses: 48, attendedClasses: 46, percentage: 95.83, status: 'Eligible' },
  { rollNo: 'STU007', studentName: 'Rohan Gupta', course: 'B.Tech Electronics', totalClasses: 46, attendedClasses: 40, percentage: 86.96, status: 'Eligible' },
  { rollNo: 'STU008', studentName: 'Pooja Jena', course: 'BCA', totalClasses: 42, attendedClasses: 29, percentage: 69.05, status: 'Shortage' },
];
