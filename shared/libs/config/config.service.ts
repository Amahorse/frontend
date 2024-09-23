import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config.interface';
import { catchError, throwError } from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)
export class configService {

    config!:Config

    constructor(private http: HttpClient) {}
    
    async get(): Promise<Config> {
        console.log('chiamata config');
        this.http.get<Config>('/config').pipe(

            catchError((error: HttpErrorResponse)=>{
              //TODO: qualsiasi errore dia questa chiamata deve mandare a una pagine html statica per dire che la app è offline
              //TODO: sto throw error è deprecato
              return throwError(error)
            })
          ).subscribe((data: Config) => {
            this.config = data;
        })
        return this.config;
    }
  
}