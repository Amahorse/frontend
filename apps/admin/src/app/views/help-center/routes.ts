import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./help-center.component').then(m => m.HelpCenterComponent),
    data: {
      title: `Help Center`
    }
  }
];

