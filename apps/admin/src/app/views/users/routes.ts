import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'menu.users'
    },
    children: [
      {
        path: '',
        redirectTo: 'menu.users',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadComponent: () => import('./user/users.user.component').then(m => m.UsersUserComponent),
        data: {
          title: 'menu.new'
        }
      },
      {
        path: 'list',
        loadComponent: () => import('./list/users.list.component').then(m => m.UsersListComponent),
        data: {
          title: 'menu.list'
        }
      }
    ]
  }
];


