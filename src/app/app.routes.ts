import { Routes } from '@angular/router';
import { VerticalLayout } from '@layouts/vertical-layout/vertical-layout';
import { authGuard } from '@core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: VerticalLayout,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/auth/auth.route').then((mod) => mod.Auth_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/error/error.route').then((mod) => mod.ERROR_PAGES_ROUTES),
  },
];
