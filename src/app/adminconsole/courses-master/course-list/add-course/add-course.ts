import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.scss',
})
export class AddCourse {
  private router = inject(Router);

  code = '';
  name = '';
  department = '';
  level: 'Undergraduate' | 'Postgraduate' | 'Diploma' = 'Undergraduate';
  duration = '4 Years';
  totalSemesters = 8;
  totalCredits = 160;
  intake = 60;
  status: 'Active' | 'Inactive' = 'Active';

  departmentOptions: string[] = [
    'Computer Science',
    'Electronics & Comm.',
    'Mechanical Eng.',
    'Civil Engineering',
    'Business Administration',
    'Electrical Eng.',
  ];

  levelOptions = ['Undergraduate', 'Postgraduate', 'Diploma'];

  onSubmit(): void {
    if (!this.code.trim() || !this.name.trim() || !this.department) {
      return;
    }
    this.router.navigate(['/courses']);
  }

  viewList(): void {
    this.router.navigate(['/courses']);
  }
}
