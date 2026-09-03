import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-exam',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-exam.html',
  styleUrl: './add-exam.scss',
})
export class AddExam {
  private router = inject(Router);

  code = 'EXM-' + new Date().getFullYear() + '-';
  name = '';
  course = '';
  semester = '';
  session = '2025-2026';
  startDate = '';
  endDate = '';
  examType = 'End-Term';
  status = 'Upcoming';

  courseOptions = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];
  semesterOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
  typeOptions = ['End-Term', 'Mid-Term', 'Practical'];

  onSubmit(): void {
    if (!this.name.trim() || !this.course || !this.semester || !this.startDate) {
      return;
    }
    this.router.navigate(['/examinations/exam-list']);
  }

  viewList(): void {
    this.router.navigate(['/examinations/exam-list']);
  }
}
