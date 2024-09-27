import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenService } from '../token/token.service';
import { Token } from '../token/token.interface';
import { catchError, first, throwError } from 'rxjs';
import type {Config} from 'jest';
//TODO: import type non dovrebbe servire, mettere a posto caricamento jest da config https://dev.to/lbenie/how-to-add-types-with-jest-and-typescript-1bai
export const authUrl = '/oauth/token?client_id='; // + process.env['API_CLIENT_ID'];

@Injectable(
  {providedIn: 'root'}
)
export class authService {
  /*
    constructor(private http: HttpClient, public tokenService: tokenService) {}

    async get(): Promise<Token> {
  
      //Se c'è token in locale ritorna quello
      if(this.tokenService.get() !== null) { 
        return this.tokenService.token;
      }
      console.log('chiamata token');
      //Atrimenti fa chiamata sincrona per reperirlo e settarlo
      this.http.get<Token>(authUrl).pipe(first(),
 
          catchError((error: HttpErrorResponse)=>{
            //TODO: qualsiasi errore dia questa chiamata deve mandare a una pagine html statica per dire che la app è offline
            //TODO: sto throw error è deprecato
            return throwError(error)
          })
        ).subscribe((data: Token) => {
          this.tokenService.set(data);
      })

      return this.tokenService.token;
    }
*/
  
}