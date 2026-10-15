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
  displayedStudents: AttendanceRecord[] = [];

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;

  get paginationSummaryText(): string {
    const total = this.students.length;
    if (total === 0) {
      return '0 of 0 pages (0 item)';
    }
    const itemWord = total === 1 ? 'item' : 'items';
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

  savedSuccess = false;

  ngOnInit(): void {
    this.loadAttendance();
  }

  loadAttendance(): void {
    this.students = JSON.parse(JSON.stringify(INITIAL_STUDENTS_ATTENDANCE));
    this.savedSuccess = false;
    this.totalPages = Math.max(1, Math.ceil(this.students.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedStudents = this.students.slice(start, start + this.pageSize);
  }

  firstPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(1);
    }
  }

  lastPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.totalPages);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPage(page: number): void {
    if (this.totalPages === 0) {
      this.currentPage = 0;
      this.updatePagination();
      return;
    }
    const targetPage = Math.min(Math.max(page, 1), this.totalPages);
    this.currentPage = targetPage;
    this.updatePagination();
  }

  setPage(page: number): void {
    this.goToPage(page);
  }

  changePageSize(size: number | string): void {
    const parsed = Number(size);
    this.pageSize = Math.max(1, isNaN(parsed) ? 10 : parsed);
    this.currentPage = 1;
    this.totalPages = Math.max(1, Math.ceil(this.students.length / this.pageSize));
    this.updatePagination();
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.savedSuccess = false;
    }, 4000);
  }
}
