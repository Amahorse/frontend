import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtClaimsService, Role } from '../token/jwt.service';
import { JwtPayload } from 'jwt-decode';
//import { authService } from './auth.service';
//import { Role } from './role';

//DOCUMENATION: https://medium.com/@filipejohansson/how-to-protect-your-routes-in-angular-795c888cc21e

export const hasRoleGuard: CanActivateFn = (route, state) => {
  
  const router: Router = inject(Router);

  let jwtServ = jwtClaimsService();

  let values = jwtServ.getJwt();
  
  if (!values) {
    return router.navigate(['/']);
  }

  const userRole: Role = (values as JwtPayload & { role: Role }).role;
    
  const expectedRoles: Role[] = route.data['roles'];

  const hasRole: boolean = expectedRoles.some((role) => userRole === role);

  return hasRole || router.navigate(['/']);
  
  //TODO: impostazione su role per redirect unauthorized e ruoli applicazioni
  //TODO: su login pannello se uno è loggato deve rimandare a dashboard quindi deve fare l'inverso
  //TODO: controllare anche scopes che rimanda a pagina di errore 

};