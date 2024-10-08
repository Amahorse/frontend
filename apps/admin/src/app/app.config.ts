import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ConfigService } from '@shared/libs/config/config.service';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import { DropdownModule, SidebarModule } from '@coreui/angular-pro';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import { TranslationService } from '@shared/libs/language/translation.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '@shared/libs/auth/auth.interceptor'; // Ensure AuthInterceptor is a class
import { LoadingInterceptor } from '@shared/ui/panel/src/services/loading.interceptor'; // Ensure LoadingInterceptor is a class

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions()
    ),
    importProvidersFrom(SidebarModule, DropdownModule, TranslationService, ConfigService),
    IconSetService,
    provideAnimations(),
    provideHttpClient( withInterceptors([ AuthInterceptor, LoadingInterceptor]) )
  ]
};
