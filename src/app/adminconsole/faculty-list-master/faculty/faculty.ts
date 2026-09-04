import { Component, HostListener, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Faculty, FACULTY_DATA } from './data';

type ColumnFilterField = 'name' | 'department' | 'designation' | 'status';
type PaginationItem = number | '...';

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
  activeFilter: ColumnFilterField | null = null;
  activeTab: 'active' | 'archived' = 'active';

  filterValues: Record<ColumnFilterField, string> = {
    name: '',
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
  selectedFacultyId: string | null = null;
  selectedFaculty: Faculty | null = null;
  isLoading = false;

  statusOptions: string[] = ['Active', 'On Leave', 'Inactive'];
  departmentOptions: string[] = [];
  designationOptions: string[] = [];

  ngOnInit(): void {
    this.loadFaculty();
    this.extractUniqueValues();
  }

  loadFaculty(): void {
    this.facultyList = [...FACULTY_DATA];
    this.applyFiltersAndSort();
  }

  extractUniqueValues(): void {
    this.departmentOptions = Array.from(new Set(FACULTY_DATA.map((f) => f.department))).sort();
    this.designationOptions = Array.from(new Set(FACULTY_DATA.map((f) => f.designation))).sort();
  }

  applyFiltersAndSort(): void {
    const search = this.searchText.trim().toLowerCase();

    try {
      this.filteredFaculty = this.facultyList.filter((faculty) => {
        const matchesSearch =
          search === '' ||
          faculty.name.toLowerCase().includes(search) ||
          faculty.department.toLowerCase().includes(search) ||
          faculty.designation.toLowerCase().includes(search);

        const matchesName = this.matchesContains(faculty.name, this.filterValues.name);
        const matchesDepartment = this.matchesContains(faculty.department, this.filterValues.department);
        const matchesDesignation = this.matchesContains(faculty.designation, this.filterValues.designation);
        const matchesStatus = this.matchesExact(faculty.status, this.filterValues.status);
        const matchesTab =
          this.activeTab === 'active'
            ? faculty.status === 'Active' || faculty.status === 'On Leave'
            : faculty.status === 'Inactive';

        return (
          matchesSearch &&
          matchesName &&
          matchesDepartment &&
          matchesDesignation &&
          matchesStatus &&
          matchesTab
        );
      });
    } catch (error) {
      console.error('Error in applyFiltersAndSort:', error);
      this.filteredFaculty = [];
    }

    this.filteredFaculty.sort((a, b) => {
      let aValue = this.getSortValue(a);
      let bValue = this.getSortValue(b);

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }

      if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }

      return 0;
    });

    const safePageSize = Math.max(1, this.pageSize);
    this.totalPages = Math.max(1, Math.ceil(this.filteredFaculty.length / safePageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.updateDisplayedFaculty();
  }

  matchesContains(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === '' || value.toLowerCase().includes(normalizedFilter);
  }

  matchesExact(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === '' || value.toLowerCase() === normalizedFilter;
  }

  getSortValue(faculty: Faculty): string {
    switch (this.sortField) {
      case 'name':
        return faculty.name;
      case 'department':
        return faculty.department;
      case 'designation':
        return faculty.designation;
      case 'status':
        return faculty.status;
      default:
        return faculty.name;
    }
  }

  updateDisplayedFaculty(): void {
    const safePageSize = Math.max(1, this.pageSize);
    const startIndex = (this.currentPage - 1) * safePageSize;
    const endIndex = startIndex + safePageSize;
    this.displayedFaculty = this.filteredFaculty.slice(startIndex, endIndex);
  }

  onSearchChange(value: string): void {
    this.searchText = value;
    this.applyFiltersAndSort();
  }

  onFilterChange(): void {
    this.applyFiltersAndSort();
  }

  setActiveTab(tab: 'active' | 'archived'): void {
    this.activeTab = tab;
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  toggleFilter(filter: ColumnFilterField): void {
    this.activeFilter = this.activeFilter === filter ? null : filter;
  }

  closeFilter(): void {
    this.activeFilter = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.activeFilter) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (!target) {
      this.activeFilter = null;
      return;
    }

    if (target.closest('.filter-dropdown') || target.closest('.filter-icon')) {
      return;
    }

    this.activeFilter = null;
  }

  setColumnFilter(field: ColumnFilterField, value: string, closeAfter = false): void {
    this.filterValues[field] = value;
    this.currentPage = 1;
    this.applyFiltersAndSort();

    if (closeAfter) {
      this.closeFilter();
    }
  }

  clearColumnFilter(field: ColumnFilterField): void {
    this.setColumnFilter(field, '', true);
  }

  hasActiveFilter(field: ColumnFilterField): boolean {
    return this.filterValues[field].trim() !== '';
  }

  getFilterValue(field: ColumnFilterField): string {
    return this.filterValues[field];
  }

  onSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field as keyof Faculty;
      this.sortDirection = 'asc';
    }

    this.applyFiltersAndSort();
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  goToPage(page: number): void {
    const targetPage = Math.min(Math.max(page, 1), this.totalPages);
    if (targetPage !== this.currentPage) {
      this.currentPage = targetPage;
      this.updateDisplayedFaculty();
    }
  }

  changePageSize(size: number): void {
    this.pageSize = Math.max(1, Number(size) || 10);
    this.applyFiltersAndSort();
  }

  goToPaginationItem(item: PaginationItem): void {
    if (item !== '...') {
      this.goToPage(item);
    }
  }

  getPaginationItems(): PaginationItem[] {
    const total = this.totalPages;

    if (total <= 7) {
      return Array.from({ length: total }, (_, index) => index + 1);
    }

    const items: PaginationItem[] = [1];
    const windowStart = Math.max(2, this.currentPage - 1);
    const windowEnd = Math.min(total - 1, this.currentPage + 1);

    if (windowStart > 2) {
      items.push('...');
    }

    for (let page = windowStart; page <= windowEnd; page++) {
      items.push(page);
    }

    if (windowEnd < total - 1) {
      items.push('...');
    }

    items.push(total);
    return items;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active':
        return 'badge-success';
      case 'Inactive':
        return 'badge-danger';
      case 'On Leave':
        return 'badge-warning';
      default:
        return 'badge-secondary';
    }
  }

  clearFilters(): void {
    this.searchText = '';
    this.filterValues = {
      name: '',
      department: '',
      designation: '',
      status: '',
    };
    this.activeFilter = null;
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  viewFaculty(faculty: Faculty | null): void {
    if (faculty) {
      this.selectedFaculty = faculty;
      this.showViewModal = true;
    }
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedFaculty = null;
  }

  addFaculty(): void {
    this.router.navigate(['/faculty/add-faculty']);
  }

  editFaculty(faculty: Faculty): void {
    console.log('Edit faculty:', faculty);
  }

  openDeleteModal(facultyId: string): void {
    this.selectedFacultyId = facultyId;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedFacultyId = null;
  }

  deleteFaculty(): void {
    if (this.selectedFacultyId) {
      this.facultyList = this.facultyList.filter((faculty) => faculty.id !== this.selectedFacultyId);
      this.applyFiltersAndSort();
      this.closeDeleteModal();
    }
  }

  exportToCSV(): void {
    const headers = ['Name', 'Department', 'Designation', 'Status'];
    const rows = this.filteredFaculty.map((f) => [f.name, f.department, f.designation, f.status]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `faculty_${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  trackByFacultyId(_: number, faculty: Faculty): string {
    return faculty.id;
  }

  trackByPaginationItem(index: number, item: PaginationItem): string {
    return item === '...' ? `dots-${index}` : `page-${item}`;
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

  get resultCount(): number {
    return this.filteredFaculty.length;
  }
}
export { FacultyComponent as Faculty };
