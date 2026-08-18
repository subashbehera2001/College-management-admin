import { Routes } from '@angular/router'

export const ADMINCONSOLE_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@/app/adminconsole/dashboard/dashboard').then((mod) => mod.Dashboard),
    data: { title: 'Admin Dashboard' },
  },
];
