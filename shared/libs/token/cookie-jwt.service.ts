import { Injectable, inject } from '@angular/core';
import { Nullable } from '@ngserveio/utilities';
import { parseClaims } from './token-claims.helper';
import { IJwtClaimsService } from './jwt-service.iterface';
import { REQUEST, RESPONSE } from './request.token';

@Injectable({
  providedIn: 'root',
})
export class CookieJwtService implements IJwtClaimsService {
  protected readonly request = inject(REQUEST, {
    optional: true,
  });

  protected readonly response = inject(RESPONSE, {
    optional: true
  });

  getClaims<T extends object>(): Nullable<T> {
    // prendo il nome del cookie dall'environment
    // -----------------
    // TODO
    // risolvere la logica del process
    // ------------------
    // const name_cookie = process.env['JWT_COOKIE_NAME'] as string;
    const name_cookie = 'AH_COOKIE';
    // ------------------
    const token = this.request?.cookies[name_cookie];
    return parseClaims<T>(token);
  }

  setToken(token: string): void {
    // prendo il nome del cookie dall'environment
    // -----------------
    // TODO
    // risolvere la logica del process
    // ------------------
    // const name_cookie = process.env['JWT_COOKIE_NAME'] as string;
    const name_cookie = 'AH_COOKIE';
    this.response?.cookie(name_cookie, token);
  }
}