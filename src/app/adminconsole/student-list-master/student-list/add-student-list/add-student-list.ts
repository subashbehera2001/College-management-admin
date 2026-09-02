import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-student-list.html',
  styleUrl: './add-student-list.scss'
})
export class AddStudentList {
  router = inject(Router);

  studentId = '';
  name = '';
  email = '';
  course = '';
  year = '';
  status = 'Active';

  courseOptions: string[] = [
    'B.Tech Computer Science',
    'B.Tech Electrical',
    'B.Tech Mechanical',
    'BCA',
    'BBA'
  ];
  yearOptions: string[] = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  statusOptions: string[] = ['Active', 'Inactive', 'Pending'];

  onSubmit(): void {
    if (!this.studentId.trim() || !this.name.trim() || !this.email.trim() || !this.course || !this.year) {
      return;
    }
    console.log('Adding student:', {
      id: this.studentId,
      name: this.name,
      email: this.email,
      course: this.course,
      year: this.year,
      status: this.status
    });
    this.router.navigate(['/student-list']);
  }

  onCancel(): void {
    this.router.navigate(['/student-list']);
  }

  viewList(): void {
    this.router.navigate(['/student-list']);
  }
}