import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dropshipping'
    },
    children: [
      {
        path: '',
        redirectTo: 'orders-history',
        pathMatch: 'full'
      },
      {
        path: 'new-order',
        loadComponent: () => import('./dropshipping-new-order/dropshipping-new-order.component').then(m => m.DropshippingNewOrderComponent),
        data: {
          title: 'New Order'
        }
      },
      {
        path: 'orders-history',
        loadComponent: () => import('./dropshipping-orders-history/dropshipping-orders-history.component').then(m => m.DropshippingOrdersHistoryComponent),
        data: {
          title: 'Orders History'
        }
      },
      {
        path: 'customers',
        loadComponent: () => import('./dropshipping-customers/dropshipping-customers.component').then(m => m.DropshippingCustomersComponent),
        data: {
          title: 'Customers'
        }
      },
    ]
  }
];


