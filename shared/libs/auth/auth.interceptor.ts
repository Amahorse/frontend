import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { authService, authUrl } from '../auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Token } from '../token/token.interface';
import { Nullable } from '@ngserveio/utilities';
import { from, switchMap } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === authUrl) {
    return next(req);
  }

  const auth = inject(authService);
  const platformId = inject(PLATFORM_ID);
  const isBrowser = isPlatformBrowser(platformId);

  let CmsDomain = "";
  if (isBrowser) {
    if (window.location.host === 'localhost:4200' || 'new.bottle-up.com') {
      CmsDomain = 'bottle-up.com';
    } else {
      CmsDomain = window.location.host;
    }
  } else {
    // ----------------------
    // TODO
    // in SSR se chiamata server non è possibile utilizzare window.location perchè di browser
    // cambiare la logicain base al lato server
    // ----------------------
  }

  // ----------------------
  // TODO
  // trovare il modo di utilizzare process o roba simile per avere gli env
  // ----------------------
  // const translate = inject(TranslationService);
  // const language = translate.currentLang;

  // const type_page = process.env['TYPE_PAGE'] as string;
  const type_page = 'b2c';
  // ----------------------

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
            Authorization: `Bearer ${token?.access_token}`,
            'X-Bu-Domain': CmsDomain,
            'X-Bu-ClientType': type_page,
            // 'X-Bu-Language': language  // TODO
          }
        });
        // ------------------------

        return next(cloneRequest);
      }
    })
  )
};