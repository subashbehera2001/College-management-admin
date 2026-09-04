import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-faculty.html',
  styleUrl: './add-faculty.scss'
})
export class AddFaculty {
  private router = inject(Router);

  facultyId = 'FAC' + Math.floor(100 + Math.random() * 900);
  name = '';
  department = '';
  designation = '';
  status: 'Active' | 'On Leave' | 'Inactive' = 'Active';

  departmentOptions: string[] = [
    'Computer Science',
    'Electronics & Comm.',
    'Mechanical Eng.',
    'Civil Engineering',
    'Business Administration',
    'Electrical Eng.',
    'Humanities & Sciences',
  ];

  designationOptions: string[] = [
    'Professor & HOD',
    'Professor',
    'Associate Professor',
    'Assistant Professor',
    'Lecturer',
    'Lab Instructor',
  ];

  statusOptions: string[] = ['Active', 'On Leave', 'Inactive'];

  onSubmit(): void {
    if (!this.name.trim() || !this.department || !this.designation) {
      return;
    }
    console.log('Adding faculty:', {
      id: this.facultyId,
      name: this.name,
      department: this.department,
      designation: this.designation,
      status: this.status
    });
    this.router.navigate(['/faculty']);
  }

  viewList(): void {
    this.router.navigate(['/faculty']);
  }
}
