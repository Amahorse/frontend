import { Injectable } from '@angular/core';
import { Nullable } from '@ngserveio/utilities';
import { parseClaims, parseJwt } from './token-claims.helper';
import { IJwtClaimsService } from './jwt-service.iterface';
import { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})

export class SessionStorageJwtService implements IJwtClaimsService {
  // ------------------
  // TODO
  // da risolvere process
  // ------------------
  // protected readonly JWT_TOKEN = 'JWT_TOKEN';
  protected readonly JWT_TOKEN = 'AH_JWT';
  // ------------------
  // TODO: mettere in localStorage perchè almeno rimane
  protected get storage(): Storage {
    return sessionStorage;
  }

  getClaims<T extends object>(): Nullable<T> {
    const token = this.storage.getItem(this.JWT_TOKEN) as string;
    return parseClaims<T>(token);
  }

  setToken(token: string): void {
    this.storage.setItem(this.JWT_TOKEN, token);
  }

  getJwt(): Nullable<JwtPayload> {
    const token = this.storage.getItem(this.JWT_TOKEN) as string;
    return parseJwt<JwtPayload>(token);
  }
}