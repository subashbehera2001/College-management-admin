import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Exam, EXAMS_DATA } from './data';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './exam-list.html',
  styleUrl: './exam-list.scss',
})
export class ExamListComponent implements OnInit {
  private router = inject(Router);

  exams: Exam[] = [];
  filteredExams: Exam[] = [];
  searchText = '';
  selectedStatus = '';
  showDeleteModal = false;
  selectedExam: Exam | null = null;

  ngOnInit(): void {
    this.exams = [...EXAMS_DATA];
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredExams = this.exams.filter((e) => {
      const matchSearch =
        !s ||
        e.code.toLowerCase().includes(s) ||
        e.name.toLowerCase().includes(s) ||
        e.course.toLowerCase().includes(s);
      const matchStatus = !this.selectedStatus || e.status === this.selectedStatus;
      return matchSearch && matchStatus;
    });
  }

  addExam(): void {
    this.router.navigate(['/examinations/exam-list/add-exam']);
  }

  openDeleteModal(e: Exam): void {
    this.selectedExam = e;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedExam = null;
  }

  confirmDelete(): void {
    if (this.selectedExam) {
      this.exams = this.exams.filter((e) => e.code !== this.selectedExam!.code);
      this.applyFilter();
      this.closeDeleteModal();
    }
  }

  exportCSV(): void {
    const headers = ['Exam Code', 'Exam Name', 'Course', 'Semester', 'Session', 'Start Date', 'End Date', 'Type', 'Status'];
    const rows = this.filteredExams.map((e) => [e.code, e.name, e.course, e.semester, e.session, e.startDate, e.endDate, e.examType, e.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'exams_list.csv';
    a.click();
  }
}
export { ExamListComponent as ExamList };
