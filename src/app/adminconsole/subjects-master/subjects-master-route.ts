import { Routes } from '@angular/router';
import { SubjectList } from './subject-list/subject-list';
import { AddSubject } from './subject-list/add-subject/add-subject';

export const SUBJECTS_MASTER_ROUTES: Routes = [
  {
    path: '',
    component: SubjectList,
    data: { title: 'Subjects' },
  },
  {
    path: 'add-subject',
    component: AddSubject,
    data: { title: 'Add Subject' },
  },
];
