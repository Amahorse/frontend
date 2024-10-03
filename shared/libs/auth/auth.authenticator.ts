import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtClaimsService } from '../token/jwt.service';
import { catchError, Observable, throwError } from 'rxjs';
import { Token } from '../token/token.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Authenticator {

  constructor(private http: HttpClient) {}

  jwtServ = jwtClaimsService();
  
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
}
