import { Nullable } from '@ngserveio/utilities';
import { JwtPayload } from 'jwt-decode';

export interface IJwtClaimsService {
  getClaims<T extends object>(): Nullable<T>;
  setToken(token: string): void;
  getJwt(): Nullable<JwtPayload>
}