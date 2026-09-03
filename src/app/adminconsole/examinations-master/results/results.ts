import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultItem, RESULTS_DATA } from '../exam-list/data';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class Results implements OnInit {
  results: ResultItem[] = [];
  filteredResults: ResultItem[] = [];

  searchText = '';
  selectedCourse = '';
  selectedSemester = '';
  selectedResult: ResultItem | null = null;
  showMarksheetModal = false;

  courseOptions = ['B.Tech Computer Science', 'BBA', 'B.Tech Electrical', 'BCA', 'B.Tech Mechanical'];

  ngOnInit(): void {
    this.results = [...RESULTS_DATA];
    this.applyFilter();
  }

  applyFilter(): void {
    const s = this.searchText.trim().toLowerCase();
    this.filteredResults = this.results.filter((r) => {
      const matchSearch = !s || r.rollNo.toLowerCase().includes(s) || r.studentName.toLowerCase().includes(s);
      const matchCourse = !this.selectedCourse || r.course === this.selectedCourse;
      return matchSearch && matchCourse;
    });
  }

  viewMarksheet(item: ResultItem): void {
    this.selectedResult = item;
    this.showMarksheetModal = true;
  }

  closeMarksheet(): void {
    this.showMarksheetModal = false;
    this.selectedResult = null;
  }

  printMarksheet(): void {
    window.print();
  }

  exportCSV(): void {
    const headers = ['Roll No', 'Student Name', 'Course', 'Semester', 'Total Marks', 'Percentage', 'CGPA', 'Grade', 'Status'];
    const rows = this.filteredResults.map((r) => [r.rollNo, r.studentName, r.course, r.semester, r.totalMarks, r.percentage + '%', r.cgpa, r.grade, r.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.download = 'examination_results.csv';
    a.click();
  }
}
