import { Routes } from '@angular/router';

export const VIEWS_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@/app/adminconsole/dashboard/dashboard').then(
        (mod) => mod.Dashboard
      ),
    data: { title: 'Admin Dashboard' },
  },
  {
    path: 'student-list',
    loadChildren: () =>
      import('@/app/adminconsole/student-list-master/student-list-master-module').then(
        (mod) => mod.StudentListMasterModule
      ),
    data: { title: 'Student List' },
  },
  {
    path: 'faculty',
    loadChildren: () =>
      import('@/app/adminconsole/faculty-list-master/faculty-list-master-module').then(
        (mod) => mod.FacultyListMasterModule
      ),
    data: { title: 'Faculty' },
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('@/app/adminconsole/courses-master/courses-master-module').then(
        (mod) => mod.CoursesMasterModule
      ),
    data: { title: 'Courses' },
  },
  {
    path: 'subjects',
    loadChildren: () =>
      import('@/app/adminconsole/subjects-master/subjects-master-module').then(
        (mod) => mod.SubjectsMasterModule
      ),
    data: { title: 'Subjects' },
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('@/app/adminconsole/attendance-master/attendance-master-module').then(
        (mod) => mod.AttendanceMasterModule
      ),
    data: { title: 'Attendance' },
  },
  {
    path: 'examinations',
    loadChildren: () =>
      import('@/app/adminconsole/examinations-master/examinations-master-module').then(
        (mod) => mod.ExaminationsMasterModule
      ),
    data: { title: 'Examinations' },
  },
  {
    path: 'fees',
    loadChildren: () =>
      import('@/app/adminconsole/fees-master/fees-master-module').then(
        (mod) => mod.FeesMasterModule
      ),
    data: { title: 'Fees Management' },
  },
  {
    path: 'notices',
    loadChildren: () =>
      import('@/app/adminconsole/notices-master/notices-master-module').then(
        (mod) => mod.NoticesMasterModule
      ),
    data: { title: 'Notice Board' },
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('@/app/adminconsole/reports-master/reports-master-module').then(
        (mod) => mod.ReportsMasterModule
      ),
    data: { title: 'Reports' },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('@/app/adminconsole/settings-master/settings-master-module').then(
        (mod) => mod.SettingsMasterModule
      ),
    data: { title: 'Settings' },
  },
];
