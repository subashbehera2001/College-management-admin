import { Routes } from '@angular/router'
import { Dashboard } from './dashboard/dashboard'
import { TonAi } from '@/app/views/ton-ai/ton-ai'
import { Calendar } from '@/app/views/calendar/calendar'
import { Directory } from '@/app/views/directory/directory'
import { Charts } from '@/app/views/charts/charts'

export const VIEWS_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
    data: { title: 'Dashboard' },
  },
  {
    path: 'ton-ai',
    component: TonAi,
    data: { title: 'Ton AI' },
  },
  {
    path: 'calendar',
    component: Calendar,
    data: { title: 'Calendar' },
  },
  {
    path: 'directory',
    component: Directory,
    data: { title: 'Directory' },
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.route').then((mod) => mod.PAGES_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./ui/ui.route').then((mod) => mod.UI_PAGES_ROUTES),
  },
  {
    path: 'charts',
    component: Charts,
    data: { title: 'Charts' },
  },
  {
    path: '',
    loadChildren: () =>
      import('./forms/forms.route').then((mod) => mod.FORMS_PAGES_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./tables/tables.route').then((mod) => mod.TABLES_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./icons/icons.route').then((mod) => mod.ICONS_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./maps/maps.route').then((mod) => mod.MAPS_ROUTES),
  },
]
