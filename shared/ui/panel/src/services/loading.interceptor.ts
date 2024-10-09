import { inject } from '@angular/core';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import {LoadingService} from './loading.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { AlertsService } from '@shared/ui/panel/src/services/alerts.service';
import { TranslateService } from '@ngx-translate/core';


export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {

    let loading = inject(LoadingService);
    let alert = inject(AlertsService);
    let translate = inject(TranslateService);

    const excludedUrls = ['./', 'assets', 'config', 'token'];

    if (!excludedUrls.some(url => req.url.includes(url))) {
        loading.setLoading(true, req.url);
    }

    return next(req)
    .pipe(
      catchError((err) => {
        
        loading.setLoading(false, req.url);
        
        if(!excludedUrls.some(url => req.url.includes(url)) && typeof err.error.message !== 'undefined') {
          alert.addToast(translate.instant('messages.' + err.error.message));
        } 

        return throwError(() => err);
      }),
      map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          loading.setLoading(false, req.url);
        }
        return evt;
      })
    );
  
  
  };