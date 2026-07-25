import { Routes } from '@angular/router'
import { Static } from '@/app/views/tables/static/static'
import { Ajax } from '@/app/views/tables/datatables/ajax'
import { Basic } from '@/app/views/tables/datatables/basic'
import { ChildRows } from '@/app/views/tables/datatables/child-rows'
import { ExportData } from '@/app/views/tables/datatables/export-data'
import { Select } from '@/app/views/tables/datatables/select'
import { JavascriptResource } from '@/app/views/tables/datatables/javascript-resource'
import { DataRendering } from '@/app/views/tables/datatables/data-rendering'
import { ShowHide } from '@/app/views/tables/datatables/show-hide'
import { FixedHeader } from '@/app/views/tables/datatables/fixed-header'

export const TABLES_ROUTES: Routes = [
  {
    path: 'tables/static',
    component: Static,
    data: { title: 'Static Tables' },
  },
  {
    path: 'tables/data-tables/basic',
    component: Basic,
    data: { title: 'Basic Datatables' },
  },
  {
    path: 'tables/data-tables/export-data',
    component: ExportData,
    data: { title: 'Export Datatables' },
  },
  {
    path: 'tables/data-tables/select',
    component: Select,
    data: { title: 'Select Datatables' },
  },
  {
    path: 'tables/data-tables/ajax',
    component: Ajax,
    data: { title: 'Ajax Datatables' },
  },
  {
    path: 'tables/data-tables/javascript-source',
    component: JavascriptResource,
    data: { title: 'Javascript Source datatables' },
  },
  {
    path: 'tables/data-tables/data-rendering',
    component: DataRendering,
    data: { title: 'Data Rendering' },
  },

  {
    path: 'tables/data-tables/columns',
    component: ShowHide,
    data: { title: 'Show Hide Columns' },
  },
  {
    path: 'tables/data-tables/child-rows',
    component: ChildRows,
    data: { title: 'Child Rows' },
  },
  {
    path: 'tables/data-tables/fixed-header',
    component: FixedHeader,
    data: { title: 'Fixed Header' },
  },
]
