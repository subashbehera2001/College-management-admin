import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SETTINGS_MASTER_ROUTES } from './settings-master-route';

@NgModule({
  imports: [RouterModule.forChild(SETTINGS_MASTER_ROUTES)],
})
export class SettingsMasterModule {}
