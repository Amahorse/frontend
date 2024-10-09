import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { LoginComponent, Page500Component, Page404Component } from '@workspace/panel/views';
import { hasRoleGuard } from '@shared/libs/auth/auth.has-role-guard';
import { AppOfflineComponent } from '@shared/ui/app-offline/src/lib/app-offline/app-offline.component';

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
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        }, 
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'new-order',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/new-order/routes').then((m) => m.routes)
      },
      {
        path: 'orders-history',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/orders-history/routes').then((m) => m.routes)
      },
      {
        path: 'listing-download',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/listing-download/routes').then((m) => m.routes)
      },
      {
        path: 'statistics',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/statistics/routes').then((m) => m.routes)
      },
      {
        path: 'dropshipping',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/dropshipping/routes').then((m) => m.routes)
      },
      {
        path: 'api-docs',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/api-docs/routes').then((m) => m.routes)
      },
      {
        path: 'help-center',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/help-center/routes').then((m) => m.routes)
      },
      {
        path: 'communication-kit',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
        loadChildren: () => import('./views/communication-kit/routes').then((m) => m.routes)
      },
      {
        path: 'profile',
        canActivate: [hasRoleGuard],
        data: {
          roles: [ 'user','administrator','superadministrator' ]
        },
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
    path: 'offline',
    component: AppOfflineComponent,
    data: {
      title: 'Offline'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
