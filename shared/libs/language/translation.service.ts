import { Injectable, NgModule } from '@angular/core';
 import { TranslateService, TranslateModule } from '@ngx-translate/core';
 import { LanguageFactory } from './language.factory';

 @Injectable({
   providedIn: 'root'
 })

 @NgModule({
    providers: [TranslateService],
    imports: [TranslateModule.forRoot(LanguageFactory)],
 })

 export class TranslationService {


   //NOTA: Queste due variabili dovrebbero essere definite dal config in startup (defaultLang = config.default.language + availableLangs = config.app.languages) 
   defaultLang = 'it';

   availableLangs = ['it', 'en'];

   currentLang = this.defaultLang;

   constructor(

     private translateService: TranslateService) {

      this.translateService.addLangs(this.availableLangs);

      this.translateService.setDefaultLang(this.defaultLang);
     
   }

   changeLang(lang: string) {

      this.currentLang = lang;

      this.translateService.use(lang);
      
   }
 }