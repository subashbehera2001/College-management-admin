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
    loadChildren: () =>
      import('@/app/adminconsole/student-list-master/student-list-master-module').then((mod) => mod.StudentListMasterModule),
    data: { title: 'Student List' },
  },
  {
    path: 'faculty-list',
    loadChildren: () =>
      import('@/app/adminconsole/faculty-list-master/faculty-list-master-module').then((mod) => mod.FacultyListMasterModule),
    data: { title: 'Faculty List' },
  },
];
