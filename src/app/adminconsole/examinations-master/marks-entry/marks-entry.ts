import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MARKS_DATA, StudentMarks } from '../exam-list/data';

@Component({
  selector: 'app-marks-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marks-entry.html',
  styleUrl: './marks-entry.scss',
})
export class MarksEntry implements OnInit {
  selectedExam = 'EXM-2026-S4-END';
  selectedCourse = 'B.Tech Computer Science';
  selectedSemester = 'Semester 4';
  selectedSubject = 'Data Structures & Algorithms';

  examOptions = ['EXM-2026-S4-END - End-Term 2026', 'EXM-2026-S4-MID - Mid-Term 2026'];
  courseOptions = ['B.Tech Computer Science', 'B.Tech Electronics', 'B.Tech Mechanical', 'BCA', 'BBA'];
  semesterOptions = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'];
  subjectOptions = ['Data Structures & Algorithms', 'Operating Systems', 'Database Systems'];

  studentsMarks: StudentMarks[] = [];
  savedSuccess = false;

  ngOnInit(): void {
    this.loadMarks();
  }

  loadMarks(): void {
    this.studentsMarks = JSON.parse(JSON.stringify(MARKS_DATA));
    this.savedSuccess = false;
  }

  getTotal(item: StudentMarks): number {
    return (item.internalMarks || 0) + (item.externalMarks || 0);
  }

  getGrade(item: StudentMarks): string {
    const total = this.getTotal(item);
    const max = item.maxInternal + item.maxExternal;
    const pct = (total / max) * 100;
    if (pct >= 90) return 'O';
    if (pct >= 80) return 'E';
    if (pct >= 70) return 'A';
    if (pct >= 60) return 'B';
    if (pct >= 50) return 'C';
    if (pct >= 40) return 'D';
    return 'F';
  }

  getStatus(item: StudentMarks): 'Pass' | 'Fail' {
    return this.getTotal(item) >= 40 ? 'Pass' : 'Fail';
  }

  saveMarks(): void {
    this.savedSuccess = true;
    setTimeout(() => (this.savedSuccess = false), 4000);
  }
}
