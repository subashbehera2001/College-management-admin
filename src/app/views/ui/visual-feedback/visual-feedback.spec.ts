import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VisualFeedback } from './visual-feedback'

describe('VisualFeedback', () => {
  let component: VisualFeedback
  let fixture: ComponentFixture<VisualFeedback>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualFeedback],
    }).compileComponents()

    fixture = TestBed.createComponent(VisualFeedback)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
