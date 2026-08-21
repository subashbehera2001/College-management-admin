import { Routes } from '@angular/router'

export const ADMINCONSOLE_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@/app/adminconsole/dashboard/dashboard').then((mod) => mod.Dashboard),
    data: { title: 'Admin Dashboard' },
  },
  {
    path: 'student-list',
    loadComponent: () =>
      import('@/app/adminconsole/student-list/student-list').then((mod) => mod.StudentList),
    data: { title: 'Student List' },
  },
];
