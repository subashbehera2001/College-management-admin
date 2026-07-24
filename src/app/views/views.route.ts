import { Routes } from '@angular/router'
import { Dashboard } from './dashboard/dashboard'

export const VIEWS_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
    data: { title: 'Dashboard' },
  },
]
