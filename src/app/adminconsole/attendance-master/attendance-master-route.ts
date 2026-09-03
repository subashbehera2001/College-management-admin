import { Routes } from '@angular/router';
import { StudentAttendance } from './student-attendance/student-attendance';
import { AttendanceReport } from './attendance-report/attendance-report';

export const ATTENDANCE_MASTER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'student-attendance',
    pathMatch: 'full',
  },
  {
    path: 'student-attendance',
    component: StudentAttendance,
    data: { title: 'Student Attendance' },
  },
  {
    path: 'attendance-report',
    component: AttendanceReport,
    data: { title: 'Attendance Report' },
  },
];
