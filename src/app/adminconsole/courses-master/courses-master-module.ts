import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COURSES_MASTER_ROUTES } from './courses-master-route';

@NgModule({
  imports: [RouterModule.forChild(COURSES_MASTER_ROUTES)],
})
export class CoursesMasterModule {}
