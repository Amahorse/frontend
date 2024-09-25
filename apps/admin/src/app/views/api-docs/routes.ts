import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./api-docs.component').then(m => m.ApiDocsComponent),
    data: {
      title: `Api Docs`
    }
  }
];

