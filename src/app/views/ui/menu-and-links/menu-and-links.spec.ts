import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MenuAndLinks } from './menu-and-links'

describe('MenuAndLinks', () => {
  let component: MenuAndLinks
  let fixture: ComponentFixture<MenuAndLinks>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAndLinks],
    }).compileComponents()

    fixture = TestBed.createComponent(MenuAndLinks)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
