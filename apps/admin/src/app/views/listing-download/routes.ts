import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./listing-download.component').then(m => m.ListingDownloadComponent),
    data: {
      title: `Listing Download`
    }
  }
];

