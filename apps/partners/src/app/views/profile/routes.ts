import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'menu.profile'
    },
    children: [
      {
        path: '',
        redirectTo: 'menu.user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadComponent: () => import('./user/user.component').then(m => m.UserComponent),
        data: {
          title: 'menu.user'
        }
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
        data: {
          title: 'menu.settings'
        }
      }
    ]
  }
];


