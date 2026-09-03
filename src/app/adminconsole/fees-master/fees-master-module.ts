import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FEES_MASTER_ROUTES } from './fees-master-route';

@NgModule({
  imports: [RouterModule.forChild(FEES_MASTER_ROUTES)],
})
export class FeesMasterModule {}
