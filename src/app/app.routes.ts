import { Routes } from '@angular/router'
import { VerticalLayout } from '@layouts/vertical-layout/vertical-layout'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: VerticalLayout,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
  },
]
