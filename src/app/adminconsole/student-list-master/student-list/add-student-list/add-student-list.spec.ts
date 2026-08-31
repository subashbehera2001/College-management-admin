import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentList } from './add-student-list';

describe('AddStudentList', () => {
  let component: AddStudentList;
  let fixture: ComponentFixture<AddStudentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
