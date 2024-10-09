import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslationService } from '@shared/libs/language/translation.service';
import { ConfigService } from '@shared/libs/config/config.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '@shared/libs/auth/auth.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    importProvidersFrom(TranslationService, ConfigService)
  ],
};
