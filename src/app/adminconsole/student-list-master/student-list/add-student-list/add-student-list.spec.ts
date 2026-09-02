import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AddStudentList } from './add-student-list';

describe('AddStudentList', () => {
  let component: AddStudentList;
  let fixture: ComponentFixture<AddStudentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [AddStudentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});