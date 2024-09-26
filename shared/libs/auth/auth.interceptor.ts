import { HttpInterceptorFn } from '@angular/common/http';
import { authUrl } from './auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

    //La richiesta di token o agli asset non viene intercettata
  if (req.url.includes('/assets/' || req.url === authUrl)) {
    return next(req);
  }


  //const auth = inject(authService);

  //const token = auth.get();

  const cloneRequest =  req.clone({ 
    url: 'http://api.amahorse.localhost' + req.url, 
    //headers: req.headers.set('Authorization', `Bearer ${token}`) 
  });
  

  return next(cloneRequest);
  
};