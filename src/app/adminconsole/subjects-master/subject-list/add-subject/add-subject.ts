import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-subject.html',
  styleUrl: './add-subject.scss',
})
export class AddSubject {
  private router = inject(Router);

  code = '';
  name = '';
  course = '';
  semester = '';
  type: 'Theory' | 'Practical' | 'Elective' = 'Theory';
  credits = 3;
  faculty = '';
  status: 'Active' | 'Inactive' = 'Active';

  courseOptions = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];
  semesterOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];
  typeOptions = ['Theory', 'Practical', 'Elective'];
  facultyOptions = ['Dr. Ramesh Chandra', 'Dr. Anita Roy', 'Prof. Rajesh Mishra', 'Dr. Sunita Pattnaik', 'Prof. Alok Dash', 'Dr. Meenakshi Sahoo'];

  onSubmit(): void {
    if (!this.code.trim() || !this.name.trim() || !this.course || !this.semester) {
      return;
    }
    this.router.navigate(['/subjects']);
  }

  viewList(): void {
    this.router.navigate(['/subjects']);
  }
}
