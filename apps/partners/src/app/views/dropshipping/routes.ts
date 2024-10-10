import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'menu.dropshipping'
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
          title: 'menu.new_order'
        }
      },
      {
        path: 'orders-history',
        loadComponent: () => import('./dropshipping-orders-history/dropshipping-orders-history.component').then(m => m.DropshippingOrdersHistoryComponent),
        data: {
          title: 'menu.orders_history'
        }
      },
      {
        path: 'customers',
        loadComponent: () => import('./dropshipping-customers/dropshipping-customers.component').then(m => m.DropshippingCustomersComponent),
        data: {
          title: 'menu.customers'
        }
      },
    ]
  }
];


