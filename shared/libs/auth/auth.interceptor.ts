import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService, authUrl } from '../auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Token } from '../token/token.interface';
import { Nullable } from '@ngserveio/utilities';
import { from, switchMap } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === authUrl) {
    return next(req);
  }

  const auth = inject(AuthService);

  // ----------------------
  // TODO
  // trovare il modo di utilizzare process o roba simile per avere gli env
  // ----------------------
  // const translate = inject(TranslationService);
  // const language = translate.currentLang;


  let token = null as Nullable<Token> | undefined;

  // from trasforma una promis ein un observable
  return from(auth.get()).pipe(
    switchMap(tokenRet => {
      token = tokenRet;

      // -------------------
      // TODO
      // valutare meglio questa logica
      // per bypassare richieste di file etc che non hanno bisogno di header etc
      // -------------------
      if (req.url.includes('./') || req.url.includes('assets')) {
        return next(req);
      } else {
        // ------------------------
        // TODO
        // risolvere il problema dei process
        // ------------------------
        // per debug: metto path fisso, si risolve dopo con i process
        const cloneRequest = req.clone({
          url: 'http://api.amahorse.localhost' + req.url,
          setHeaders: {
            Authorization: `Bearer ${token?.access_token}`
          }
        });
        // ------------------------

        return next(cloneRequest);
      }
    })
  )
};