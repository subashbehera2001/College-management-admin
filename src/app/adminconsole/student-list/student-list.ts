import { Component, AfterViewInit, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgIcon } from "@ng-icons/core";
import { Student, STUDENTS } from "./data";

@Component({
  selector: "app-student-list",
  standalone: true,
  imports: [CommonModule, FormsModule, NgIcon],
  templateUrl: "./student-list.html",
  styleUrl: "./student-list.scss",
})
export class StudentList implements OnInit, AfterViewInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  displayedStudents: Student[] = [];

  // Search and Filter
  searchText: string = "";
  selectedStatus: string = "";
  selectedGender: string = "";
  selectedYear: string = "";
  activeFilter: string | null = null;
  activeTab: 'active' | 'archived' = 'active';

  // Sorting
  sortField: string = "name";
  sortDirection: "asc" | "desc" = "asc";

  // Pagination
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;

  // UI States
  showDeleteModal: boolean = false;
  selectedStudentId: string | null = null;
  isLoading: boolean = false;

  // Unique values for filters
  statusOptions: string[] = ["Active", "Inactive", "Pending"];
  genderOptions: string[] = ["Male", "Female", "Other"];
  yearOptions: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadStudents();
    this.extractUniqueYears();
  }

  ngAfterViewInit(): void {
    // Implementation for view initialization if needed
  }

  /**
   * Load students from data
   */
  loadStudents(): void {
    this.students = [...STUDENTS];
    this.applyFiltersAndSort();
  }

  /**
   * Extract unique years for filter dropdown
   */
  extractUniqueYears(): void {
    const years = new Set(STUDENTS.map(s => s.year));
    this.yearOptions = Array.from(years).sort();
  }

  /**
   * Apply all filters and sorting
   */
  applyFiltersAndSort(): void {
    try {
      this.filteredStudents = this.students.filter(student => {
        const matchSearch = this.searchText.toLowerCase() === "" ||
          student.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          student.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
          student.id.toLowerCase().includes(this.searchText.toLowerCase()) ||
          student.contact.includes(this.searchText);

        const matchStatus = this.selectedStatus === "" || student.status === this.selectedStatus;
        const matchGender = this.selectedGender === "" || student.gender === this.selectedGender;
        const matchYear = this.selectedYear === "" || student.year === this.selectedYear;
        const matchTab = this.activeTab === 'active' 
          ? (student.status === 'Active' || student.status === 'Pending')
          : student.status === 'Inactive';

        return matchSearch && matchStatus && matchGender && matchYear && matchTab;
      });
    } catch (error) {
      console.error('Error in applyFiltersAndSort:', error);
    }

    // Apply sorting
    this.filteredStudents.sort((a, b) => {
        let aValue = this.getSortValue(a);
        let bValue = this.getSortValue(b);

        if (typeof aValue === "string") {
          aValue = aValue.toLowerCase();
          bValue = (bValue as string).toLowerCase();
        }

        if (aValue < bValue) return this.sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return this.sortDirection === "asc" ? 1 : -1;
        return 0;
      });

    // Calculate pagination
    this.totalPages = Math.ceil(this.filteredStudents.length / this.pageSize);
    this.currentPage = 1;
    this.updateDisplayedStudents();
  }

  /**
   * Get sort value from student object
   */
  getSortValue(student: Student): any {
    switch (this.sortField) {
      case "name":
        return student.name;
      case "email":
        return student.email;
      case "course":
        return student.course;
      case "year":
        return student.year;
      case "status":
        return student.status;
      case "admissionDate":
        return new Date(student.admissionDate);
      default:
        return student.name;
    }
  }

  /**
   * Update displayed students based on current page
   */
  updateDisplayedStudents(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedStudents = this.filteredStudents.slice(startIndex, endIndex);
  }

  /**
   * Handle search input change
   */
  onSearchChange(value: string): void {
    this.searchText = value;
    this.applyFiltersAndSort();
  }

  /**
   * Handle filter change
   */
  onFilterChange(): void {
    this.applyFiltersAndSort();
  }

  /**
   * Set active tab
   */
  setActiveTab(tab: 'active' | 'archived'): void {
    this.activeTab = tab;
    this.applyFiltersAndSort();
  }

  /**
   * Toggle column filter dropdown
   */
  toggleFilter(filter: string): void {
    this.activeFilter = this.activeFilter === filter ? null : filter;
  }

  /**
   * Close active filter
   */
  closeFilter(): void {
    this.activeFilter = null;
  }

  /**
   * Set status filter
   */
  setStatusFilter(status: string): void {
    this.selectedStatus = status;
    this.applyFiltersAndSort();
  }

  /**
   * Set gender filter
   */
  setGenderFilter(gender: string): void {
    this.selectedGender = gender;
    this.applyFiltersAndSort();
  }

  /**
   * Set year filter
   */
  setYearFilter(year: string): void {
    this.selectedYear = year;
    this.applyFiltersAndSort();
  }

  /**
   * Handle sort column click
   */
  onSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortDirection = "asc";
    }
    this.applyFiltersAndSort();
  }

  /**
   * Go to previous page
   */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedStudents();
    }
  }

  /**
   * Go to next page
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedStudents();
    }
  }

  /**
   * Go to specific page
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedStudents();
    }
  }

  /**
   * Change page size
   */
  changePageSize(size: number): void {
    this.pageSize = size;
    this.applyFiltersAndSort();
  }

  /**
   * Get page numbers array for pagination
   */
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  /**
   * Get status badge class
   */
  getStatusClass(status: string): string {
    switch (status) {
      case "Active":
        return "badge-success";
      case "Inactive":
        return "badge-danger";
      case "Pending":
        return "badge-warning";
      default:
        return "badge-secondary";
    }
  }

  /**
   * Clear all filters
   */
  clearFilters(): void {
    this.searchText = "";
    this.selectedStatus = "";
    this.selectedGender = "";
    this.selectedYear = "";
    this.activeFilter = null;
    this.applyFiltersAndSort();
  }

  /**
   * View student details
   */
  viewStudent(student: Student | null): void {
    if (student) {
      console.log("View student:", student);
      // Implement navigation or modal to view details
    }
  }

  /**
   * Add new student
   */
  addStudent(): void {
    console.log("Add new student");
    // Implement navigation to add student page
  }

  /**
   * Edit student
   */
  editStudent(student: Student): void {
    console.log("Edit student:", student);
    // Implement navigation to edit page
  }

  /**
   * Open delete confirmation modal
   */
  openDeleteModal(studentId: string): void {
    this.selectedStudentId = studentId;
    this.showDeleteModal = true;
  }

  /**
   * Close delete modal
   */
  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedStudentId = null;
  }

  /**
   * Delete student
   */
  deleteStudent(): void {
    if (this.selectedStudentId) {
      this.isLoading = true;
      setTimeout(() => {
        this.students = this.students.filter(
          s => s.id !== this.selectedStudentId
        );
        this.applyFiltersAndSort();
        this.closeDeleteModal();
        this.isLoading = false;
      }, 500);
    }
  }

  /**
   * Export students to CSV
   */
  exportToCSV(): void {
    const headers = ["ID", "Name", "Email", "Course", "Year", "Contact", "Status", "Gender", "Admission Date"];
    const rows = this.filteredStudents.map(s => [
      s.id,
      s.name,
      s.email,
      s.course,
      s.year,
      s.contact,
      s.status,
      s.gender,
      s.admissionDate,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `students_${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Get selected students count for filters applied
   */
  get resultCount(): number {
    return this.filteredStudents.length;
  }
}
