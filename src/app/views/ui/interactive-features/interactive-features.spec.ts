import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InteractiveFeatures } from './interactive-features'

describe('InteractiveFeatures', () => {
  let component: InteractiveFeatures
  let fixture: ComponentFixture<InteractiveFeatures>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveFeatures],
    }).compileComponents()

    fixture = TestBed.createComponent(InteractiveFeatures)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
