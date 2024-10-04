import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { LoginComponent, Page500Component, Page404Component } from '@shared/ui/panel/src/index';
import { hasRoleGuard } from '@shared/libs/auth/auth.has-role-guard';

//TODO: traduzione titoli pagine login etc
//TODO: traduzione breadcrubmbs

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
        canActivate: [hasRoleGuard],
        /*
        data: {
          roles: [ Role.ADMIN ]
        },
        */
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'new-order',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/new-order/routes').then((m) => m.routes)
      },
      {
        path: 'orders-history',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/orders-history/routes').then((m) => m.routes)
      },
      {
        path: 'listing-download',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/listing-download/routes').then((m) => m.routes)
      },
      {
        path: 'statistics',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/statistics/routes').then((m) => m.routes)
      },
      {
        path: 'dropshipping',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/dropshipping/routes').then((m) => m.routes)
      },
      {
        path: 'api-docs',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/api-docs/routes').then((m) => m.routes)
      },
      {
        path: 'help-center',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/help-center/routes').then((m) => m.routes)
      },
      {
        path: 'communication-kit',
        canActivate: [hasRoleGuard],
        loadChildren: () => import('./views/communication-kit/routes').then((m) => m.routes)
      },
      {
        path: 'profile',
        canActivate: [hasRoleGuard],
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
  { path: '**', redirectTo: 'dashboard' }
];
