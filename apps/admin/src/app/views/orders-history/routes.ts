import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./orders-history.component').then(m => m.OrdersHistoryComponent),
    data: {
      title: `Orders History`
    }
  }
];

