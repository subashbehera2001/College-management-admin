import { ComponentFixture, TestBed } from '@angular/core/testing'

import { QuillEditors } from './quill-editors'

describe('QuillEditors', () => {
  let component: QuillEditors
  let fixture: ComponentFixture<QuillEditors>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuillEditors],
    }).compileComponents()

    fixture = TestBed.createComponent(QuillEditors)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
