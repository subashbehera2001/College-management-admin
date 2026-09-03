import { Routes } from '@angular/router';
import { FeeCollection } from './fee-collection/fee-collection';
import { PaymentHistory } from './payment-history/payment-history';

export const FEES_MASTER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'fee-collection',
    pathMatch: 'full',
  },
  {
    path: 'fee-collection',
    component: FeeCollection,
    data: { title: 'Fee Collection' },
  },
  {
    path: 'payment-history',
    component: PaymentHistory,
    data: { title: 'Payment History' },
  },
];
