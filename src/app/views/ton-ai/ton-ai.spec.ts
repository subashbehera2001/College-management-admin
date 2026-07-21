import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TonAi } from './ton-ai'

describe('TonAi', () => {
  let component: TonAi
  let fixture: ComponentFixture<TonAi>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TonAi],
    }).compileComponents()

    fixture = TestBed.createComponent(TonAi)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
