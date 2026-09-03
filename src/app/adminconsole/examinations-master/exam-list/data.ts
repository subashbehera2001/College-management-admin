export interface Exam {
  code: string;
  name: string;
  course: string;
  semester: string;
  session: string;
  startDate: string;
  endDate: string;
  examType: 'Mid-Term' | 'End-Term' | 'Practical';
  status: 'Upcoming' | 'Ongoing' | 'Completed';
}

export const EXAMS_DATA: Exam[] = [
  {
    code: 'EXM-2026-S4-END',
    name: 'Even Semester End-Term Examination 2026',
    course: 'B.Tech Computer Science',
    semester: 'Semester 4',
    session: '2025-2026',
    startDate: '2026-05-10',
    endDate: '2026-05-25',
    examType: 'End-Term',
    status: 'Upcoming',
  },
  {
    code: 'EXM-2026-S4-MID',
    name: 'Mid-Term Theory & Lab Assessment',
    course: 'B.Tech Computer Science',
    semester: 'Semester 4',
    session: '2025-2026',
    startDate: '2026-03-15',
    endDate: '2026-03-22',
    examType: 'Mid-Term',
    status: 'Ongoing',
  },
  {
    code: 'EXM-2025-S3-END',
    name: 'Odd Semester End-Term Examination 2025',
    course: 'B.Tech Computer Science',
    semester: 'Semester 3',
    session: '2025-2026',
    startDate: '2025-11-20',
    endDate: '2025-12-05',
    examType: 'End-Term',
    status: 'Completed',
  },
  {
    code: 'EXM-2026-BBA-S2',
    name: 'BBA First Year Mid-Semester Exam',
    course: 'BBA',
    semester: 'Semester 2',
    session: '2025-2026',
    startDate: '2026-04-05',
    endDate: '2026-04-12',
    examType: 'Mid-Term',
    status: 'Upcoming',
  },
  {
    code: 'EXM-2026-BCA-S4',
    name: 'BCA Advanced Programming Practical Exam',
    course: 'BCA',
    semester: 'Semester 4',
    session: '2025-2026',
    startDate: '2026-03-18',
    endDate: '2026-03-20',
    examType: 'Practical',
    status: 'Ongoing',
  },
];

export interface StudentMarks {
  rollNo: string;
  studentName: string;
  internalMarks: number;
  externalMarks: number;
  maxInternal: number;
  maxExternal: number;
}

export const MARKS_DATA: StudentMarks[] = [
  { rollNo: 'STU001', studentName: 'Rahul Sharma', internalMarks: 27, externalMarks: 64, maxInternal: 30, maxExternal: 70 },
  { rollNo: 'STU002', studentName: 'Priya Verma', internalMarks: 29, externalMarks: 68, maxInternal: 30, maxExternal: 70 },
  { rollNo: 'STU003', studentName: 'Aman Kumar', internalMarks: 18, externalMarks: 38, maxInternal: 30, maxExternal: 70 },
  { rollNo: 'STU004', studentName: 'Sneha Patel', internalMarks: 25, externalMarks: 58, maxInternal: 30, maxExternal: 70 },
  { rollNo: 'STU005', studentName: 'Vikram Singh', internalMarks: 14, externalMarks: 28, maxInternal: 30, maxExternal: 70 },
  { rollNo: 'STU006', studentName: 'Ananya Dash', internalMarks: 28, externalMarks: 65, maxInternal: 30, maxExternal: 70 },
];

export interface ResultItem {
  rollNo: string;
  studentName: string;
  course: string;
  semester: string;
  totalMarks: number;
  maxMarks: number;
  percentage: number;
  cgpa: number;
  grade: string;
  status: 'Passed' | 'Failed';
}

export const RESULTS_DATA: ResultItem[] = [
  { rollNo: 'STU001', studentName: 'Rahul Sharma', course: 'B.Tech Computer Science', semester: 'Semester 3', totalMarks: 465, maxMarks: 500, percentage: 93.0, cgpa: 9.3, grade: 'O (Outstanding)', status: 'Passed' },
  { rollNo: 'STU002', studentName: 'Priya Verma', course: 'BBA', semester: 'Semester 1', totalMarks: 450, maxMarks: 500, percentage: 90.0, cgpa: 9.0, grade: 'E (Excellent)', status: 'Passed' },
  { rollNo: 'STU003', studentName: 'Aman Kumar', course: 'B.Tech Electrical', semester: 'Semester 3', totalMarks: 290, maxMarks: 500, percentage: 58.0, cgpa: 5.8, grade: 'C (Average)', status: 'Passed' },
  { rollNo: 'STU004', studentName: 'Sneha Patel', course: 'BCA', semester: 'Semester 2', totalMarks: 420, maxMarks: 500, percentage: 84.0, cgpa: 8.4, grade: 'A (Very Good)', status: 'Passed' },
  { rollNo: 'STU005', studentName: 'Vikram Singh', course: 'B.Tech Mechanical', semester: 'Semester 3', totalMarks: 185, maxMarks: 500, percentage: 37.0, cgpa: 3.7, grade: 'F (Fail)', status: 'Failed' },
  { rollNo: 'STU006', studentName: 'Ananya Dash', course: 'B.Tech Computer Science', semester: 'Semester 3', totalMarks: 472, maxMarks: 500, percentage: 94.4, cgpa: 9.4, grade: 'O (Outstanding)', status: 'Passed' },
];
