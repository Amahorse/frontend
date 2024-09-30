import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
//import { AuthService } from './auth.service';
//import { Role } from './role';

//DOCUMENATION: https://medium.com/@filipejohansson/how-to-protect-your-routes-in-angular-795c888cc21e

export const hasRoleGuard: CanActivateFn = (route, state) => {
  
  const router: Router = inject(Router);

  /*
  const userRole: Role = inject(AuthService).getUserRole();
  const expectedRoles: Role[] = route.data['roles'];

  const hasRole: boolean = expectedRoles.some((role) => userRole === role);
   
  return hasRole || router.navigate(['unauthorized']);
  */ 
  
  //TODO: impostazione su role per redirect unauthorized e ruoli applicazioni
  //TODO: su login pannello se uno è loggato deve rimandare a dashboard quindi deve fare l'inverso

  return !!localStorage.getItem('isLoggedin') || router.navigate(['/']).then(() => false);
};