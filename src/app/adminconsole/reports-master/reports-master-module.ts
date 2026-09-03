import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { REPORTS_MASTER_ROUTES } from './reports-master-route';

@NgModule({
  imports: [RouterModule.forChild(REPORTS_MASTER_ROUTES)],
})
export class ReportsMasterModule {}
