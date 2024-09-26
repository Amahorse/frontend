import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { LoginComponent, Page500Component, Page404Component, RegisterComponent } from '@shared/ui/panel/src/index';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'new-order',
        loadChildren: () => import('./views/new-order/routes').then((m) => m.routes)
      },
      {
        path: 'orders-history',
        loadChildren: () => import('./views/orders-history/routes').then((m) => m.routes)
      },
      {
        path: 'listing-download',
        loadChildren: () => import('./views/listing-download/routes').then((m) => m.routes)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./views/statistics/routes').then((m) => m.routes)
      },
      {
        path: 'dropshipping',
        loadChildren: () => import('./views/dropshipping/routes').then((m) => m.routes)
      },
      {
        path: 'api-docs',
        loadChildren: () => import('./views/api-docs/routes').then((m) => m.routes)
      },
      {
        path: 'help-center',
        loadChildren: () => import('./views/help-center/routes').then((m) => m.routes)
      },
      {
        path: 'communication-kit',
        loadChildren: () => import('./views/communication-kit/routes').then((m) => m.routes)
      },
      {
        path: 'profile',
        loadChildren: () => import('./views/profile/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
