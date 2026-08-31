import { Routes } from '@angular/router';
import { StudentList } from './student-list/student-list';

export const STUDENT_LIST_MASTER_ROUTES: Routes = [
  {
    path: '',
    component: StudentList,
    data: { title: 'Student List' },
  },
];
