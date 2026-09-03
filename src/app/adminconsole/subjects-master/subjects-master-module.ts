import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SUBJECTS_MASTER_ROUTES } from './subjects-master-route';

@NgModule({
  imports: [RouterModule.forChild(SUBJECTS_MASTER_ROUTES)],
})
export class SubjectsMasterModule {}
