import { Routes } from '@angular/router'
import { Pricing } from '@/app/views/pages/pricing/pricing'
import { EmptyPage } from '@/app/views/pages/empty-page/empty-page'
import { Timeline } from '@/app/views/pages/timeline/timeline'
import { Invoice } from '@/app/views/pages/invoice/invoice'
import { TermsAndConditions } from '@/app/views/pages/terms-and-conditions/terms-and-conditions'

export const PAGES_ROUTES: Routes = [
  {
    path: 'pages/pricing',
    component: Pricing,
    data: { title: 'Pricing' },
  },

  {
    path: 'pages/empty',
    component: EmptyPage,
    data: { title: 'Empty Page' },
  },
  {
    path: 'pages/timeline',
    component: Timeline,
    data: { title: 'Timeline' },
  },
  {
    path: 'pages/invoice',
    component: Invoice,
    data: { title: 'Invoice' },
  },
  {
    path: 'pages/terms-conditions',
    component: TermsAndConditions,
    data: { title: 'Terms & Conditions' },
  },
]
