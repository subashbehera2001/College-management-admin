import { Routes } from '@angular/router';
import { SettingsProfile } from './profile/profile';
import { ChangePassword } from './change-password/change-password';

export const SETTINGS_MASTER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: SettingsProfile,
    data: { title: 'Profile' },
  },
  {
    path: 'change-password',
    component: ChangePassword,
    data: { title: 'Change Password' },
  },
];
