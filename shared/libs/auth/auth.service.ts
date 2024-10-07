import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../token/token.interface';
import { catchError, first, lastValueFrom, Observable, throwError } from 'rxjs';
import { jwtClaimsService } from '../token/jwt.service';
import { Nullable } from '@ngserveio/utilities';
import { map } from 'rxjs/operators';

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

  jwtServ = jwtClaimsService();

  async get(): Promise<Nullable<Token>> {

    const claims = this.jwtServ.getClaims<Token>();
    if (!claims) {

      const getToken$ = this.http.get<Token>(authUrl);
      await lastValueFrom(getToken$).then(data => {
        var token_str = JSON.stringify(data);
        this.jwtServ.setToken(token_str);
        return data;
      }).catch(error => {
        //TODO: rimandare a pagina statica di errore
        console.error('Errore durante il caricamento del token:', error);
        return throwError(() => error);
      });
    } else {
      return claims;
    }
    return claims;
  }

  login(data: { email: string, password: string }): Observable<boolean> {

    const body = {
      "client_id": `xETZNsNHBMiDqLTV.45c19b29012947fa5c8f44c755fe901e.1698312544Z6SY`,
      "email": data.email,
      "password": data.password,
    };

    return this.http.post<Token>(`/oauth/login`, body).pipe(

      map((token: Token) => {
        const token_str = JSON.stringify(token);
        this.jwtServ.setToken(token_str);
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  logout(): Observable<boolean> {
  
    return this.http.post<Token>(`/oauth/logout`,[]).pipe(
      
      map((token: Token) => {
      
        const token_str = JSON.stringify(token);
        this.jwtServ.setToken(token_str);
        return true;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );

  }



}