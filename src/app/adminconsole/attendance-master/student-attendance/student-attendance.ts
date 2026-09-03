import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AttendanceRecord, INITIAL_STUDENTS_ATTENDANCE } from './data';

@Component({
  selector: 'app-student-attendance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-attendance.html',
  styleUrl: './student-attendance.scss',
})
export class StudentAttendance implements OnInit {
  selectedDate: string = new Date().toISOString().split('T')[0];
  selectedCourse: string = 'B.Tech Computer Science';
  selectedSemester: string = 'Semester 4';
  selectedSubject: string = 'Data Structures & Algorithms';

  courseOptions = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];
  semesterOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];
  subjectOptions = ['Data Structures & Algorithms', 'Operating Systems', 'Database Management', 'Computer Networks'];

  students: AttendanceRecord[] = [];
  savedSuccess = false;

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    this.students = JSON.parse(JSON.stringify(INITIAL_STUDENTS_ATTENDANCE));
    this.savedSuccess = false;
  }

  setStatus(student: AttendanceRecord, status: 'Present' | 'Absent' | 'Late'): void {
    student.status = status;
  }

  markAll(status: 'Present' | 'Absent'): void {
    this.students.forEach((s) => (s.status = status));
  }

  get presentCount(): number {
    return this.students.filter((s) => s.status === 'Present').length;
  }

  get absentCount(): number {
    return this.students.filter((s) => s.status === 'Absent').length;
  }

  get lateCount(): number {
    return this.students.filter((s) => s.status === 'Late').length;
  }

  get attendanceRate(): string {
    if (this.students.length === 0) return '0%';
    const rate = ((this.presentCount + this.lateCount * 0.5) / this.students.length) * 100;
    return rate.toFixed(1) + '%';
  }

  saveAttendance(): void {
    this.savedSuccess = true;
    setTimeout(() => {
      this.savedSuccess = false;
    }, 4000);
  }
}
