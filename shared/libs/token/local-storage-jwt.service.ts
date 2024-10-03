import { Injectable } from '@angular/core';
import { Nullable } from '@ngserveio/utilities';
import { parseClaims } from './token-claims.helper';
import { IJwtClaimsService } from './jwt-service.iterface';

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
}