import { Routes } from '@angular/router';
import { NoticeBoard } from './notice-board/notice-board';
import { AddNotice } from './notice-board/add-notice/add-notice';

export const NOTICES_MASTER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'notice-board',
    pathMatch: 'full',
  },
  {
    path: 'notice-board',
    component: NoticeBoard,
    data: { title: 'Notice Board' },
  },
  {
    path: 'add-notice',
    component: AddNotice,
    data: { title: 'Add Notice' },
  },
];
