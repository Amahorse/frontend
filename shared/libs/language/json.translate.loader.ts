import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

import * as translationEn from '@shared/assets/i18n/en.json';
import * as translationIt from '@shared/assets/i18n/it.json';

export class ReflectionJsonTranslateLoader implements TranslateLoader {

  public getTranslation(lang: string) {
    switch (lang) {
      case 'en': {
        return of(translationEn);
      } break;
      default: {
        return of(translationIt);
      } break;
    }
  }
}

export function JsonTranslateLoader() {
  return new ReflectionJsonTranslateLoader();
}