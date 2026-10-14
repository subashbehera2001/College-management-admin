import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentList } from './student-list';

describe('StudentList', () => {
  let component: StudentList;
  let fixture: ComponentFixture<StudentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with 6 total students loaded from data', () => {
    expect(component.students.length).toBe(6);
  });

  it('should format paginationSummaryText correctly', () => {
    expect(component.paginationSummaryText).toContain('of');
    expect(component.paginationSummaryText).toContain('pages');
    expect(component.paginationSummaryText).toContain('item');
  });

  it('should display "0 of 0 pages (0 item)" when no records match filter', () => {
    component.searchText = 'NON_EXISTENT_STUDENT_XYZ_123';
    component.applyFiltersAndSort();

    expect(component.filteredStudents.length).toBe(0);
    expect(component.totalPages).toBe(0);
    expect(component.currentPage).toBe(0);
    expect(component.paginationSummaryText).toBe('0 of 0 pages (0 item)');
  });

  it('should change page size and recalculate total pages', () => {
    component.changePageSize(2);
    expect(component.pageSize).toBe(2);
    expect(component.currentPage).toBe(1);
    expect(component.displayedStudents.length).toBeLessThanOrEqual(2);

    component.changePageSize(10);
    expect(component.pageSize).toBe(10);
    expect(component.displayedStudents.length).toBe(component.filteredStudents.length);
  });

  it('should navigate through pages correctly with first, next, previous, and last when page size is small', () => {
    component.changePageSize(2);
    const total = component.totalPages;

    if (total > 1) {
      component.nextPage();
      expect(component.currentPage).toBe(2);

      component.previousPage();
      expect(component.currentPage).toBe(1);

      component.lastPage();
      expect(component.currentPage).toBe(total);

      component.firstPage();
      expect(component.currentPage).toBe(1);
    }
  });

  it('should support 1 page view cleanly', () => {
    component.searchText = 'STU001';
    component.applyFiltersAndSort();

    expect(component.filteredStudents.length).toBe(1);
    expect(component.totalPages).toBe(1);
    expect(component.currentPage).toBe(1);
    expect(component.paginationSummaryText).toBe('1 of 1 pages (1 item)');
  });
});
