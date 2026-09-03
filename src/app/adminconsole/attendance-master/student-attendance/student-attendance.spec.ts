import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { StudentAttendanceComponent } from './student-attendance';

describe('StudentAttendanceComponent', () => {
  let component: StudentAttendanceComponent;
  let fixture: ComponentFixture<StudentAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [StudentAttendanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
