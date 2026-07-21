import { Routes } from '@angular/router'
import { BasicElements } from '@/app/views/forms/basic-elements/basic-elements'
import { Plugins } from '@/app/views/forms/plugins/plugins'
import { Validation } from '@/app/views/forms/validation/validation'
import { Wizard } from '@/app/views/forms/wizard/wizard'
import { FileUploads } from '@/app/views/forms/file-uploads/file-uploads'
import { QuillEditors } from '@/app/views/forms/quill-editors/quill-editors'

export const FORMS_PAGES_ROUTES: Routes = [
  {
    path: 'forms/basic',
    component: BasicElements,
    data: { title: 'Basic Elements' },
  },
  {
    path: 'forms/plugins',
    component: Plugins,
    data: { title: 'Plugins' },
  },
  {
    path: 'forms/validation',
    component: Validation,
    data: { title: 'Validation' },
  },
  {
    path: 'forms/wizard',
    component: Wizard,
    data: { title: 'Wizard' },
  },
  {
    path: 'forms/file-uploads',
    component: FileUploads,
    data: { title: 'File Uploads' },
  },
  {
    path: 'forms/editors',
    component: QuillEditors,
    data: { title: 'Quill Editors' },
  },
]
