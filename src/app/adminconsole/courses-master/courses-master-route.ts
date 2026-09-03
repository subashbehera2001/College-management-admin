import { Routes } from '@angular/router';
import { CourseList } from './course-list/course-list';
import { AddCourse } from './course-list/add-course/add-course';

export const COURSES_MASTER_ROUTES: Routes = [
  {
    path: '',
    component: CourseList,
    data: { title: 'Courses' },
  },
  {
    path: 'add-course',
    component: AddCourse,
    data: { title: 'Add Course' },
  },
];
