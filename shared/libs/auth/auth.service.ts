import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { tokenService } from '../token/token.service';
import { Token } from '../token/token.interface';
import { catchError, first, lastValueFrom, Observable, throwError } from 'rxjs';
import { jwtClaimsService } from '../token/jwt.service';
import { Nullable } from '@ngserveio/utilities';

// ----------------
// TODO
// trovare il modo di integrare gli env
// ----------------
// export const authUrl = process.env['API_URL'] + '/oauth/token?client_id=' + process.env['API_CLIENT_ID'];
export const authUrl = "http://api.amahorse.localhost" + '/oauth/token?client_id=' + 'xETZNsNHBMiDqLTV.45c19b29012947fa5c8f44c755fe901e.1698312544Z6SY';

@Injectable(
  { providedIn: 'root' }
)
export class authService {
  constructor(private http: HttpClient) { }

  async get(): Promise<Nullable<Token>> {
    const jwtServ = jwtClaimsService();
    const claims = jwtServ.getClaims<Token>();
    if (!claims) {
      console.log('chiamata token');
      const getToken$ = this.http.get<Token>(authUrl);
      await lastValueFrom(getToken$).then(data => {
        var token_str = JSON.stringify(data);
        jwtServ.setToken(token_str);
        return data;
      }).catch(error => {
        console.error('Errore durante il caricamento del token:', error);
        return throwError(() => error);
      });
    } else {
      return claims;
    }
    return claims;
  }


}