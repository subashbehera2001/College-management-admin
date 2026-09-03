import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultReport } from './result-report';

describe('ResultReport', () => {
  let component: ResultReport;
  let fixture: ComponentFixture<ResultReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
