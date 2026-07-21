import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CoreElements } from './core-elements'

describe('CoreElements', () => {
  let component: CoreElements
  let fixture: ComponentFixture<CoreElements>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreElements],
    }).compileComponents()

    fixture = TestBed.createComponent(CoreElements)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
