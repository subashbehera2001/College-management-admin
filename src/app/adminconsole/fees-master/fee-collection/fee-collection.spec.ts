import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FeeCollectionComponent } from './fee-collection';

describe('FeeCollectionComponent', () => {
  let component: FeeCollectionComponent;
  let fixture: ComponentFixture<FeeCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [FeeCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
