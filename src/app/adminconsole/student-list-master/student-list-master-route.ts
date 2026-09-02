import { Routes } from '@angular/router';
import { StudentList } from './student-list/student-list';
import { AddStudentList } from './student-list/add-student-list/add-student-list';

export const STUDENT_LIST_MASTER_ROUTES: Routes = [
  {
    path: '',
    component: StudentList,
    data: { title: 'Student List' },
  },
  {
    path: 'add-student-list',
    component: AddStudentList,
    data: { title: 'Add Student' },
  },
];