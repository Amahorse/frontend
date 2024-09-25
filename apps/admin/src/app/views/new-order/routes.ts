import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./new-order.component').then(m => m.NewOrderComponent),
    data: {
      title: `New Order`
    }
  }
];

