import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STUDENT_LIST_MASTER_ROUTES } from './student-list-master-route';

@NgModule({
  imports: [
    RouterModule.forChild(STUDENT_LIST_MASTER_ROUTES)
  ]
})
export class StudentListMasterModule { }
