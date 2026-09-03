import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ATTENDANCE_MASTER_ROUTES } from './attendance-master-route';

@NgModule({
  imports: [RouterModule.forChild(ATTENDANCE_MASTER_ROUTES)],
})
export class AttendanceMasterModule {}
