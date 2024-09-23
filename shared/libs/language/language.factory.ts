import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpTranslateLoader } from './http.translate.loader';
import { JsonTranslateLoader } from './json.translate.loader';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export const LanguageFactory : TranslateModule = {
    loader: {
      provide: TranslateLoader,
      useFactory: isPlatformServer(PLATFORM_ID) ? JsonTranslateLoader : HttpTranslateLoader,
      deps: [HttpClient]
  }
};