import { Routes } from '@angular/router';
import { ExamList } from './exam-list/exam-list';
import { AddExam } from './exam-list/add-exam/add-exam';
import { MarksEntry } from './marks-entry/marks-entry';
import { Results } from './results/results';

export const EXAMINATIONS_MASTER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'exam-list',
    pathMatch: 'full',
  },
  {
    path: 'exam-list',
    component: ExamList,
    data: { title: 'Exam List' },
  },
  {
    path: 'exam-list/add-exam',
    component: AddExam,
    data: { title: 'Add Exam' },
  },
  {
    path: 'marks-entry',
    component: MarksEntry,
    data: { title: 'Marks Entry' },
  },
  {
    path: 'results',
    component: Results,
    data: { title: 'Exam Results' },
  },
];
