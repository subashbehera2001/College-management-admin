import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, SUBJECTS_DATA } from './data';

type ColumnFilterField = 'name' | 'course' | 'semester' | 'type' | 'faculty';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject-list.html',
  styleUrl: './subject-list.scss',
})
export class SubjectListComponent implements OnInit {
  private router = inject(Router);

  subjectList: Subject[] = [];
  filteredSubjects: Subject[] = [];
  displayedSubjects: Subject[] = [];

  searchText = '';
  activeTab: 'active' | 'archived' = 'active';
  activeFilter: ColumnFilterField | null = null;

  filterValues: Record<ColumnFilterField, string> = {
    name: '',
    course: '',
    semester: '',
    type: '',
    faculty: '',
  };

  sortField: keyof Subject = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;

  get paginationSummaryText(): string {
    const total = this.filteredSubjects.length;
    if (total === 0) {
      return '0 of 0 pages (0 item)';
    }
    const itemWord = total === 1 ? 'item' : 'items';
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

  showDeleteModal = false;
  showViewModal = false;
  selectedSubject: Subject | null = null;

  courseOptions: string[] = [];
  semesterOptions: string[] = [];
  typeOptions: string[] = ['Theory', 'Practical', 'Elective'];
  facultyOptions: string[] = [];

  ngOnInit(): void {
    this.subjectList = [...SUBJECTS_DATA];
    this.courseOptions = Array.from(new Set(SUBJECTS_DATA.map((s) => s.course))).sort();
    this.semesterOptions = Array.from(new Set(SUBJECTS_DATA.map((s) => s.semester))).sort();
    this.facultyOptions = Array.from(new Set(SUBJECTS_DATA.map((s) => s.faculty))).sort();
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort(): void {
    const search = this.searchText.trim().toLowerCase();

    this.filteredSubjects = this.subjectList.filter((s) => {
      const matchesSearch =
        search === '' ||
        s.code.toLowerCase().includes(search) ||
        s.name.toLowerCase().includes(search) ||
        s.course.toLowerCase().includes(search) ||
        s.faculty.toLowerCase().includes(search);

      const matchesName = !this.filterValues.name || s.name.toLowerCase().includes(this.filterValues.name.toLowerCase());
      const matchesCourse = !this.filterValues.course || s.course === this.filterValues.course;
      const matchesSem = !this.filterValues.semester || s.semester === this.filterValues.semester;
      const matchesType = !this.filterValues.type || s.type === this.filterValues.type;
      const matchesFaculty = !this.filterValues.faculty || s.faculty === this.filterValues.faculty;

      const matchesTab = this.activeTab === 'active' ? true : false;

      return matchesSearch && matchesName && matchesCourse && matchesSem && matchesType && matchesFaculty && matchesTab;
    });

    this.filteredSubjects.sort((a, b) => {
      const valA = (a[this.sortField] || '').toString().toLowerCase();
      const valB = (b[this.sortField] || '').toString().toLowerCase();
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredSubjects.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedSubjects = this.filteredSubjects.slice(start, start + this.pageSize);
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
    this.applyFiltersAndSort();
  }

  onSort(field: keyof Subject): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.applyFiltersAndSort();
  }

  toggleFilter(field: ColumnFilterField): void {
    this.activeFilter = this.activeFilter === field ? null : field;
  }

  closeFilter(): void {
    this.activeFilter = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.activeFilter) return;
    const target = event.target as HTMLElement | null;
    if (!target) { this.activeFilter = null; return; }
    if (target.closest('.filter-dropdown') || target.closest('.filter-icon')) return;
    this.activeFilter = null;
  }

  setColumnFilter(field: ColumnFilterField, value: string, closeAfter = false): void {
    this.filterValues[field] = value;
    this.currentPage = 1;
    this.applyFiltersAndSort();
    if (closeAfter) this.closeFilter();
  }

  hasActiveFilter(field: ColumnFilterField): boolean {
    return !!this.filterValues[field];
  }

  clearFilter(field: ColumnFilterField): void {
    this.setColumnFilter(field, '', true);
  }

  setActiveTab(tab: 'active' | 'archived'): void {
    this.activeTab = tab;
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  addSubject(): void {
    this.router.navigate(['/subjects/add-subject']);
  }

  editSubject(sub: Subject): void {
    console.log('Edit subject:', sub);
  }

  openViewModal(sub: Subject): void {
    this.selectedSubject = sub;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedSubject = null;
  }

  openDeleteModal(sub: Subject): void {
    this.selectedSubject = sub;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedSubject = null;
  }

  confirmDelete(): void {
    if (this.selectedSubject) {
      this.subjectList = this.subjectList.filter((s) => s.code !== this.selectedSubject!.code);
      this.applyFiltersAndSort();
      this.closeDeleteModal();
    }
  }

  exportToCSV(): void {
    const headers = ['Subject Code', 'Name', 'Course', 'Semester', 'Type', 'Credits', 'Faculty'];
    const rows = this.filteredSubjects.map((s) => [s.code, s.name, s.course, s.semester, s.type, s.credits, s.faculty]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'subject_list.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
export { SubjectListComponent as SubjectList };
