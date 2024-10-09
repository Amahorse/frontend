import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config.interface';
import { lastValueFrom, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable(
  { providedIn: 'root' }
)
export class ConfigService {
  private _config!: Config

  constructor(private http: HttpClient, private auth$: AuthService) { }

  async loadConfig(): Promise<Config> {
    const token = await this.auth$.get();  // Attendi il recupero del token
    if (token) {
      const getConfig$ = this.http.get<Config>('/config');
      await lastValueFrom(getConfig$).then((config_ret: Config) => {
        this._config = config_ret;
        return config_ret;
      }).catch(error => {
        //TODO: qualsiasi errore dia questa chiamata deve mandare a una pagine html statica per dire che la app è offline
        console.error('Errore durante il caricamento del config:', error);
        return throwError(() => error);
      });
    } else {
      //TODO: qualsiasi errore dia questa chiamata deve mandare a una pagine html statica per dire che la app è offline
      console.error("CONFIG: problemi nel recupero del token");
    }

    return this._config;
  }

  get config() {
    return this._config;
  }

}