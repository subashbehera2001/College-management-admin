import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NOTICES_MASTER_ROUTES } from './notices-master-route';

@NgModule({
  imports: [RouterModule.forChild(NOTICES_MASTER_ROUTES)],
})
export class NoticesMasterModule {}
