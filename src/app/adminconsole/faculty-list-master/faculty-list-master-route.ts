import { Routes } from '@angular/router';
import { Faculty } from './faculty/faculty';
import { AddFaculty } from './faculty/add-faculty/add-faculty';

export const FACULTY_LIST_MASTER_ROUTES: Routes = [
  {
    path: '',
    component: Faculty,
    data: { title: 'Faculty' },
  },
  {
    path: 'add-faculty',
    component: AddFaculty,
    data: { title: 'Add Faculty' },
  },
  
];