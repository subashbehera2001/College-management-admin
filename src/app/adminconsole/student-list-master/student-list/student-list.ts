import { Component, HostListener, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Student, STUDENTS } from "./data";

type ColumnFilterField = "name" | "email" | "course" | "year";
type PaginationItem = number | "...";

@Component({
  selector: "app-student-list",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./student-list.html",
  styleUrl: "./student-list.scss",
})
export class StudentList implements OnInit {
  router = inject(Router);
  students: Student[] = [];
  filteredStudents: Student[] = [];
  displayedStudents: Student[] = [];

  searchText = "";
  activeFilter: ColumnFilterField | null = null;
  activeTab: "active" | "archived" = "active";

  filterValues: Record<ColumnFilterField, string> = {
    name: "",
    email: "",
    course: "",
    year: "",
  };

  sortField = "name";
  sortDirection: "asc" | "desc" = "asc";

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  currentPage = 1;
  totalPages = 1;
  jumpToPageInput: number | null = 1;

  get paginationSummaryText(): string {
    const total = this.filteredStudents.length;
    if (total === 0) {
      return "0 of 0 pages (0 item)";
    }
    const itemWord = total === 1 ? "item" : "items";
    return `${this.currentPage} of ${this.totalPages} pages (${total} ${itemWord})`;
  }

  showDeleteModal = false;
  showViewModal = false;
  selectedStudentId: string | null = null;
  selectedStudent: Student | null = null;
  isLoading = false;

  yearOptions: string[] = [];
  courseOptions: string[] = [];

  ngOnInit(): void {
    this.loadStudents();
    this.extractUniqueValues();
  }

  loadStudents(): void {
    this.students = [...STUDENTS];
    this.applyFiltersAndSort();
  }

  extractUniqueValues(): void {
    this.yearOptions = Array.from(new Set(STUDENTS.map((student) => student.year))).sort();
    this.courseOptions = Array.from(new Set(STUDENTS.map((student) => student.course))).sort();
  }

  applyFiltersAndSort(): void {
    const search = this.searchText.trim().toLowerCase();

    try {
      this.filteredStudents = this.students.filter((student) => {
        const matchesSearch =
          search === "" ||
          student.name.toLowerCase().includes(search) ||
          student.email.toLowerCase().includes(search) ||
          student.course.toLowerCase().includes(search) ||
          student.year.toLowerCase().includes(search);

        const matchesName = this.matchesContains(student.name, this.filterValues.name);
        const matchesEmail = this.matchesContains(student.email, this.filterValues.email);
        const matchesCourse = this.matchesContains(student.course, this.filterValues.course);
        const matchesYear = this.matchesExact(student.year, this.filterValues.year);
        const matchesTab = this.activeTab === "active" ? true : false;

        return (
          matchesSearch &&
          matchesName &&
          matchesEmail &&
          matchesCourse &&
          matchesYear &&
          matchesTab
        );
      });
    } catch (error) {
      console.error("Error in applyFiltersAndSort:", error);
      this.filteredStudents = [];
    }

    this.filteredStudents.sort((a, b) => {
      let aValue = this.getSortValue(a);
      let bValue = this.getSortValue(b);

      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return this.sortDirection === "asc" ? -1 : 1;
      }

      if (aValue > bValue) {
        return this.sortDirection === "asc" ? 1 : -1;
      }

      return 0;
    });

    const safePageSize = Math.max(1, this.pageSize);
    if (this.filteredStudents.length === 0) {
      this.totalPages = 0;
      this.currentPage = 0;
    } else {
      this.totalPages = Math.max(1, Math.ceil(this.filteredStudents.length / safePageSize));
      this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    }
    this.jumpToPageInput = this.currentPage;
    this.updateDisplayedStudents();
  }

  matchesContains(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === "" || value.toLowerCase().includes(normalizedFilter);
  }

  matchesExact(value: string, filterValue: string): boolean {
    const normalizedFilter = filterValue.trim().toLowerCase();
    return normalizedFilter === "" || value.toLowerCase() === normalizedFilter;
  }

  getSortValue(student: Student): string {
    switch (this.sortField) {
      case "name":
        return student.name;
      case "email":
        return student.email;
      case "course":
        return student.course;
      case "year":
        return student.year;
      default:
        return student.name;
    }
  }

  updateDisplayedStudents(): void {
    if (this.filteredStudents.length === 0 || this.currentPage === 0) {
      this.displayedStudents = [];
      return;
    }
    const safePageSize = Math.max(1, this.pageSize);
    const startIndex = (this.currentPage - 1) * safePageSize;
    const endIndex = startIndex + safePageSize;
    this.displayedStudents = this.filteredStudents.slice(startIndex, endIndex);
  }

  onSearchChange(value: string): void {
    this.searchText = value;
    this.applyFiltersAndSort();
  }

  onFilterChange(): void {
    this.applyFiltersAndSort();
  }

  setActiveTab(tab: "active" | "archived"): void {
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

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    if (!this.activeFilter) {
      return;
    }

    const target = event.target as HTMLElement | null;
    if (!target) {
      this.activeFilter = null;
      return;
    }

    if (target.closest(".filter-dropdown") || target.closest(".filter-icon")) {
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
    this.setColumnFilter(field, "", true);
  }

  hasActiveFilter(field: ColumnFilterField): boolean {
    return this.filterValues[field].trim() !== "";
  }

  getFilterValue(field: ColumnFilterField): string {
    return this.filterValues[field];
  }

  onSort(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    } else {
      this.sortField = field;
      this.sortDirection = "asc";
    }

    this.applyFiltersAndSort();
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
      this.updateDisplayedStudents();
      return;
    }
    const targetPage = Math.min(Math.max(page, 1), this.totalPages);
    this.currentPage = targetPage;
    this.jumpToPageInput = targetPage;
    this.updateDisplayedStudents();
  }

  jumpToPage(): void {
    if (this.jumpToPageInput !== null && this.jumpToPageInput !== undefined) {
      const page = Math.floor(Number(this.jumpToPageInput));
      if (!isNaN(page)) {
        this.goToPage(page);
      }
    }
  }

  changePageSize(size: number | string): void {
    const parsed = Number(size);
    this.pageSize = Math.max(1, isNaN(parsed) ? 2 : parsed);
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  goToPaginationItem(item: PaginationItem): void {
    if (item !== "...") {
      this.goToPage(item);
    }
  }

  getPaginationItems(): PaginationItem[] {
    const total = this.totalPages;

    if (total <= 7) {
      return Array.from({ length: total }, (_, index) => index + 1);
    }

    const current = this.currentPage;

    if (current <= 4) {
      return [1, 2, 3, 4, 5, "...", total];
    }

    if (current >= total - 3) {
      return [1, "...", total - 4, total - 3, total - 2, total - 1, total];    }

    return [1, "...", current - 1, current, current + 1, "...", total];
  }


  clearFilters(): void {
    this.searchText = "";
    this.filterValues = {
      name: "",
      email: "",
      course: "",
      year: "",
    };
    this.activeFilter = null;
    this.currentPage = 1;
    this.applyFiltersAndSort();
  }

  viewStudent(student: Student | null): void {
    if (student) {
      this.selectedStudent = student;
      this.showViewModal = true;
    }
  }

  closeViewModal(): void {
    this.showViewModal = false;
    this.selectedStudent = null;
  }

  addStudent(): void {
    this.router.navigate(['/student-list/add-student-list']);
  }

  editStudent(student: Student): void {
    console.log("Edit student:", student);
  }

  openDeleteModal(student: Student): void {
    this.selectedStudent = student;
    this.selectedStudentId = student.id;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedStudentId = null;
    this.selectedStudent = null;
  }

  deleteStudent(): void {
    if (this.selectedStudentId) {
      this.students = this.students.filter((student) => student.id !== this.selectedStudentId);
      this.applyFiltersAndSort();
      this.closeDeleteModal();
    }
  }

  exportToCSV(): void {
    const headers = ["Name", "Email", "Course", "Year"];
    const rows = this.filteredStudents.map((student) => [
      student.name,
      student.email,
      student.course,
      student.year,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `students_${new Date().getTime()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  trackByStudentId(_: number, student: Student): string {
    return student.id;
  }

  trackByPaginationItem(index: number, item: PaginationItem): string {
    return item === "..." ? `dots-${index}` : `page-${item}`;
  }

  get startRecord(): number {
    if (this.filteredStudents.length === 0) {
      return 0;
    }

    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endRecord(): number {
    return Math.min(this.currentPage * this.pageSize, this.filteredStudents.length);
  }

  get resultCount(): number {
    return this.filteredStudents.length;
  }
}
















