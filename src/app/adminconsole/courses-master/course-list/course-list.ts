import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Course, COURSES_DATA } from './data';

type ColumnFilterField = 'code' | 'name' | 'department' | 'level' | 'status';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.scss',
})
export class CourseListComponent implements OnInit {
  private router = inject(Router);

  courseList: Course[] = [];
  filteredCourses: Course[] = [];
  displayedCourses: Course[] = [];

  searchText = '';
  activeTab: 'active' | 'archived' = 'active';
  activeFilter: ColumnFilterField | null = null;

  filterValues: Record<ColumnFilterField, string> = {
    code: '',
    name: '',
    department: '',
    level: '',
    status: '',
  };

  sortField: keyof Course = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  pageSize = 10;
  currentPage = 1;
  totalPages = 1;

  showDeleteModal = false;
  showViewModal = false;
  selectedCourse: Course | null = null;

  departmentOptions: string[] = [];
  levelOptions: string[] = ['Undergraduate', 'Postgraduate', 'Diploma'];

  ngOnInit(): void {
    this.courseList = [...COURSES_DATA];
    this.departmentOptions = Array.from(new Set(COURSES_DATA.map((c) => c.department))).sort();
    this.applyFiltersAndSort();
  }

  applyFiltersAndSort(): void {
    const search = this.searchText.trim().toLowerCase();

    this.filteredCourses = this.courseList.filter((c) => {
      const matchesSearch =
        search === '' ||
        c.code.toLowerCase().includes(search) ||
        c.name.toLowerCase().includes(search) ||
        c.department.toLowerCase().includes(search) ||
        c.level.toLowerCase().includes(search);

      const matchesCode = !this.filterValues.code || c.code.toLowerCase().includes(this.filterValues.code.toLowerCase());
      const matchesName = !this.filterValues.name || c.name.toLowerCase().includes(this.filterValues.name.toLowerCase());
      const matchesDept = !this.filterValues.department || c.department === this.filterValues.department;
      const matchesLevel = !this.filterValues.level || c.level === this.filterValues.level;
      const matchesStatus = !this.filterValues.status || c.status === this.filterValues.status;

      const matchesTab = this.activeTab === 'active' ? c.status === 'Active' : c.status === 'Inactive';

      return matchesSearch && matchesCode && matchesName && matchesDept && matchesLevel && matchesStatus && matchesTab;
    });

    this.filteredCourses.sort((a, b) => {
      const valA = (a[this.sortField] || '').toString().toLowerCase();
      const valB = (b[this.sortField] || '').toString().toLowerCase();
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredCourses.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedCourses = this.filteredCourses.slice(start, start + this.pageSize);
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onSort(field: keyof Course): void {
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

  addCourse(): void {
    this.router.navigate(['/courses/add-course']);
  }

  openViewModal(course: Course): void {
    this.selectedCourse = course;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedCourse = null;
  }

  openDeleteModal(course: Course): void {
    this.selectedCourse = course;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedCourse = null;
  }

  confirmDelete(): void {
    if (this.selectedCourse) {
      this.courseList = this.courseList.filter((c) => c.code !== this.selectedCourse!.code);
      this.applyFiltersAndSort();
      this.closeDeleteModal();
    }
  }

  exportToCSV(): void {
    const headers = ['Course Code', 'Course Name', 'Department', 'Level', 'Duration', 'Total Semesters', 'Total Credits', 'Intake', 'Status'];
    const rows = this.filteredCourses.map((c) => [c.code, c.name, c.department, c.level, c.duration, c.totalSemesters, c.totalCredits, c.intake, c.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'course_list.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  get startRecord(): number {
    if (this.filteredCourses.length === 0) {
      return 0;
    }
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endRecord(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredCourses.length);
  }
}
export { CourseListComponent as CourseList };
