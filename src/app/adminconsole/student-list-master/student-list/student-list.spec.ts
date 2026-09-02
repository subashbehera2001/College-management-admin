import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { StudentList } from './student-list';

describe('StudentList', () => {
  let component: StudentList;
  let fixture: ComponentFixture<StudentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
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
});