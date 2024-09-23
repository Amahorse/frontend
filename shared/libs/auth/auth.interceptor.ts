import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { authService, authUrl } from '../auth/auth.service';


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //La richiesta di token non viene intercettata
  if(req.url === authUrl) {
    return next(req);
  }

  const auth = inject(authService);

  const token = auth.get();

  const cloneRequest =  req.clone({ 
    url: process.env['API_URL'] + req.url, 
    headers: req.headers.set('Authorization', `Bearer ${token}`) 
  });
  

  return next(cloneRequest);
  
};