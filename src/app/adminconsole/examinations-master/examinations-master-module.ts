import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EXAMINATIONS_MASTER_ROUTES } from './examinations-master-route';

@NgModule({
  imports: [RouterModule.forChild(EXAMINATIONS_MASTER_ROUTES)],
})
export class ExaminationsMasterModule {}
