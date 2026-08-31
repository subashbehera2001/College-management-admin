import { Component, HostListener, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgIcon } from "@ng-icons/core";
import { Student, STUDENTS } from "./data";

type ColumnFilterField = "id" | "name" | "email" | "course" | "year" | "status";
type PaginationItem = number | "...";

@Component({
  selector: "app-student-list",
  standalone: true,
  imports: [CommonModule, FormsModule, NgIcon],
  templateUrl: "./student-list.html",
  styleUrl: "./student-list.scss",
})
export class StudentList implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  displayedStudents: Student[] = [];

  searchText = "";
  activeFilter: ColumnFilterField | null = null;
  activeTab: "active" | "archived" = "active";

  filterValues: Record<ColumnFilterField, string> = {
    id: "",
    name: "",
    email: "",
    course: "",
    year: "",
    status: "",
  };

  sortField = "name";
  sortDirection: "asc" | "desc" = "asc";

  pageSize = 10;
  currentPage = 1;
  totalPages = 1;

  showDeleteModal = false;
  showViewModal = false;
  selectedStudentId: string | null = null;
  selectedStudent: Student | null = null;
  isLoading = false;

  statusOptions: string[] = ["Active", "Inactive", "Pending"];
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
          student.id.toLowerCase().includes(search) ||
          student.name.toLowerCase().includes(search) ||
          student.email.toLowerCase().includes(search) ||
          student.course.toLowerCase().includes(search) ||
          student.year.toLowerCase().includes(search) ||
          student.status.toLowerCase().includes(search);

        const matchesId = this.matchesContains(student.id, this.filterValues.id);
        const matchesName = this.matchesContains(student.name, this.filterValues.name);
        const matchesEmail = this.matchesContains(student.email, this.filterValues.email);
        const matchesCourse = this.matchesContains(student.course, this.filterValues.course);
        const matchesYear = this.matchesExact(student.year, this.filterValues.year);
        const matchesStatus = this.matchesExact(student.status, this.filterValues.status);
        const matchesTab =
          this.activeTab === "active"
            ? student.status === "Active" || student.status === "Pending"
            : student.status === "Inactive";

        return (
          matchesSearch &&
          matchesId &&
          matchesName &&
          matchesEmail &&
          matchesCourse &&
          matchesYear &&
          matchesStatus &&
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
    this.totalPages = Math.max(1, Math.ceil(this.filteredStudents.length / safePageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
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
      case "id":
        return student.id;
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
      default:
        return student.name;
    }
  }

  updateDisplayedStudents(): void {
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
      this.updateDisplayedStudents();
    }
  }

  changePageSize(size: number): void {
    this.pageSize = Math.max(1, Number(size) || 10);
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

    const items: PaginationItem[] = [1];
    const windowStart = Math.max(2, this.currentPage - 1);
    const windowEnd = Math.min(total - 1, this.currentPage + 1);

    if (windowStart > 2) {
      items.push("...");
    }

    for (let page = windowStart; page <= windowEnd; page++) {
      items.push(page);
    }

    if (windowEnd < total - 1) {
      items.push("...");
    }

    items.push(total);
    return items;
  }

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

  clearFilters(): void {
    this.searchText = "";
    this.filterValues = {
      id: "",
      name: "",
      email: "",
      course: "",
      year: "",
      status: "",
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
    console.log("Add new student");
  }

  editStudent(student: Student): void {
    console.log("Edit student:", student);
  }

  openDeleteModal(studentId: string): void {
    this.selectedStudentId = studentId;
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.selectedStudentId = null;
  }

  deleteStudent(): void {
    if (this.selectedStudentId) {
      this.students = this.students.filter((student) => student.id !== this.selectedStudentId);
      this.applyFiltersAndSort();
      this.closeDeleteModal();
    }
  }

  exportToCSV(): void {
    const headers = ["ID", "Name", "Email", "Course", "Year", "Status"];
    const rows = this.filteredStudents.map((student) => [
      student.id,
      student.name,
      student.email,
      student.course,
      student.year,
      student.status,
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







