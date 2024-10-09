import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ConfigService } from '@shared/libs/config/config.service';
import { from, lastValueFrom } from 'rxjs';

bootstrapApplication(AppComponent, appConfig)
  .then(async appRef => {
    const injector = appRef.injector;
    const config_service = injector.get(ConfigService);

    const getConfig$ = from(config_service.loadConfig());
    await lastValueFrom(getConfig$);
  })
  .catch((err) =>
    console.error(err)
  );