import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Faculty, FACULTY_DATA } from './data';

type ColumnFilterField = 'id' | 'name' | 'email' | 'department' | 'designation' | 'status';

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faculty.html',
  styleUrl: './faculty.scss',
})
export class FacultyComponent implements OnInit {
  private router = inject(Router);

  facultyList: Faculty[] = [];
  filteredFaculty: Faculty[] = [];
  displayedFaculty: Faculty[] = [];

  searchText = '';
  activeTab: 'active' | 'archived' = 'active';
  activeFilter: ColumnFilterField | null = null;

  filterValues: Record<ColumnFilterField, string> = {
    id: '',
    name: '',
    email: '',
    department: '',
    designation: '',
    status: '',
  };

  sortField: keyof Faculty = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';

  pageSize = 10;
  currentPage = 1;
  totalPages = 1;

  showDeleteModal = false;
  showViewModal = false;
  selectedFaculty: Faculty | null = null;

  departmentOptions: string[] = [];
  designationOptions: string[] = [];
  statusOptions: string[] = ['Active', 'On Leave', 'Inactive'];

  ngOnInit(): void {
    this.facultyList = [...FACULTY_DATA];
    this.extractUniqueValues();
    this.applyFiltersAndSort();
  }

  extractUniqueValues(): void {
    this.departmentOptions = Array.from(new Set(FACULTY_DATA.map((f) => f.department))).sort();
    this.designationOptions = Array.from(new Set(FACULTY_DATA.map((f) => f.designation))).sort();
  }

  applyFiltersAndSort(): void {
    const search = this.searchText.trim().toLowerCase();

    this.filteredFaculty = this.facultyList.filter((faculty) => {
      const matchesSearch =
        search === '' ||
        faculty.id.toLowerCase().includes(search) ||
        faculty.name.toLowerCase().includes(search) ||
        faculty.email.toLowerCase().includes(search) ||
        faculty.department.toLowerCase().includes(search) ||
        faculty.designation.toLowerCase().includes(search) ||
        faculty.qualification.toLowerCase().includes(search);

      const matchesId = !this.filterValues.id || faculty.id.toLowerCase().includes(this.filterValues.id.toLowerCase());
      const matchesName = !this.filterValues.name || faculty.name.toLowerCase().includes(this.filterValues.name.toLowerCase());
      const matchesDept = !this.filterValues.department || faculty.department === this.filterValues.department;
      const matchesDesig = !this.filterValues.designation || faculty.designation === this.filterValues.designation;
      const matchesStatus = !this.filterValues.status || faculty.status === this.filterValues.status;

      const matchesTab =
        this.activeTab === 'active'
          ? faculty.status === 'Active' || faculty.status === 'On Leave'
          : faculty.status === 'Inactive';

      return matchesSearch && matchesId && matchesName && matchesDept && matchesDesig && matchesStatus && matchesTab;
    });

    // Sort
    this.filteredFaculty.sort((a, b) => {
      const valA = (a[this.sortField] || '').toString().toLowerCase();
      const valB = (b[this.sortField] || '').toString().toLowerCase();
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredFaculty.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.displayedFaculty = this.filteredFaculty.slice(start, start + this.pageSize);
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

  onSort(field: keyof Faculty): void {
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

  addFaculty(): void {
    this.router.navigate(['/faculty/add-faculty']);
  }

  editFaculty(faculty: Faculty): void {
    console.log('Edit faculty:', faculty);
  }

  openViewModal(faculty: Faculty): void {
    this.selectedFaculty = faculty;
    this.showViewModal = true;
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedFaculty = null;
  }

  openDeleteModal(faculty: Faculty): void {
    this.selectedFaculty = faculty;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedFaculty = null;
  }

  confirmDelete(): void {
    if (this.selectedFaculty) {
      this.facultyList = this.facultyList.filter((f) => f.id !== this.selectedFaculty!.id);
      this.applyFiltersAndSort();
      this.closeDeleteModal();
    }
  }

  exportToCSV(): void {
    const headers = ['Faculty ID', 'Name', 'Email', 'Phone', 'Department', 'Designation', 'Qualification', 'Experience', 'Joining Date', 'Status'];
    const rows = this.filteredFaculty.map((f) => [f.id, f.name, f.email, f.phone, f.department, f.designation, f.qualification, f.experience, f.joiningDate, f.status]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'faculty_list.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  get startRecord(): number {
    if (this.filteredFaculty.length === 0) {
      return 0;
    }
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endRecord(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredFaculty.length);
  }
}
export { FacultyComponent as Faculty };
