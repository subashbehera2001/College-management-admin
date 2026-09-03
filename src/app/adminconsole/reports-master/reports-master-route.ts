import { Routes } from '@angular/router';
import { StudentReport } from './student-report/student-report';
import { AttendanceReport } from './attendance-report/attendance-report';
import { FeeReport } from './fee-report/fee-report';
import { ResultReport } from './result-report/result-report';

export const REPORTS_MASTER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'student-report',
    pathMatch: 'full',
  },
  {
    path: 'student-report',
    component: StudentReport,
    data: { title: 'Student Report' },
  },
  {
    path: 'attendance-report',
    component: AttendanceReport,
    data: { title: 'Attendance Report' },
  },
  {
    path: 'fee-report',
    component: FeeReport,
    data: { title: 'Fee Report' },
  },
  {
    path: 'result-report',
    component: ResultReport,
    data: { title: 'Result Report' },
  },
];
