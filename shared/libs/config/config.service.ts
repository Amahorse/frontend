import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config.interface';
import { lastValueFrom, throwError } from 'rxjs';

@Injectable(
  { providedIn: 'root' }
)
export class configService {
  config!: Config

  constructor(private http: HttpClient) { }

  async get(): Promise<Config> {

    const getConfig$ = this.http.get<Config>('/config');
    await lastValueFrom(getConfig$).then((config_ret: Config) => {
      
      this.config = config_ret;

      console.log("CONFIG", this.config);
      return config_ret;
    }).catch(error => {

      console.log("CONFIG GET ERR", error);
      debugger;

      //TODO: qualsiasi errore dia questa chiamata deve mandare a una pagine html statica per dire che la app è offline
      console.error('Errore durante il caricamento del config:', error);
      return throwError(() => error);
    });

    return this.config;
  }

}