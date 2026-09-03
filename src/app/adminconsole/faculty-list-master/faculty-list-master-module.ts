import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FACULTY_LIST_MASTER_ROUTES } from './faculty-list-master-route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FACULTY_LIST_MASTER_ROUTES)
  ]
})
export class FacultyListMasterModule { }
