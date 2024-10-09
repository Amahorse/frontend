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


   //TODO: Queste due variabili dovrebbero essere definite dal config in startup (defaultLang = config.default.language + availableLangs = config.app.languages) 
   //TODO: Questo è solo per admin che usa localstorage, per frontend si dovrebbe usare l'url

   defaultLang = 'it';

   availableLangs = ['it', 'en'];

   currentLang = this.defaultLang;

   constructor(

     private translateService: TranslateService) {

      this.translateService.addLangs(this.availableLangs);

      this.translateService.setDefaultLang(this.defaultLang);

      if(localStorage.getItem('lang') && this.availableLangs.includes(localStorage.getItem('lang') as string)) {

         this.currentLang = localStorage.getItem('lang') || this.defaultLang;

         if(this.currentLang) {
            this.translateService.use(this.currentLang);
         }

      }
     
   }

   changeLang(lang: string) {

      this.currentLang = lang;

      this.translateService.use(lang);

      localStorage.setItem('lang', lang);
      
   }
 }