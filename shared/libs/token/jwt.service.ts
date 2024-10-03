import { SessionStorageJwtService } from './local-storage-jwt.service';
import { CookieJwtService } from './cookie-jwt.service';
import { platformProviderFactory } from './platform-provider.factory';
import { IJwtClaimsService } from './jwt-service.iterface';

export const jwtClaimsService = () => platformProviderFactory<IJwtClaimsService>(
    SessionStorageJwtService,
    CookieJwtService
);