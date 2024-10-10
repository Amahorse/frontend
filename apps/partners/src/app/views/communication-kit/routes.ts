import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./communication-kit.component').then(m => m.CommunicationKitComponent),
    data: {
      title: `menu.communication_kit`
    }
  }
];

