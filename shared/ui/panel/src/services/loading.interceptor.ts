import { inject } from '@angular/core';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import {LoadingService} from './loading.service';
import { HttpInterceptorFn } from '@angular/common/http';


export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {

    let loading = inject(LoadingService);

    if (!req.url.includes('./') && !req.url.includes('assets') && !req.url.includes('config') && !req.url.includes('token')) {
        loading.setLoading(true, req.url);
    }

    return next(req)
    .pipe(
      catchError((err) => {
        loading.setLoading(false, req.url);
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