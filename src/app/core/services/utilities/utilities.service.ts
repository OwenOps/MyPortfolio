import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { LANGUAGES } from 'src/app/constants/language.constants';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  private isPro: boolean = false

  constructor
    (
      private readonly router: Router,
      private readonly translateService: TranslateService
    ) { }

  goToAPage(route: string): void {
    this.router.navigate([route]);
  }

  setItemToStorage(itemKey: string, itemVal: string) {
    window.localStorage.setItem(itemKey, itemVal);
  }

  setProToStorage(itemVal: string) {
    window.localStorage.setItem('pro', itemVal);
    this.isPro = itemVal == 'true';
  }

  getProFromStorage() {
    return window.localStorage.getItem('pro');
  }

  getIsPro() {
    return this.isPro;
  }

  changeSiteLanguage(language: string) {
    this.translateService.setDefaultLang(language ?? LANGUAGES.FR);
    window.localStorage.setItem(APP_CONSTANTS.LANGUAGE_LOCAL_STORAGE, language);
  }

  getTranslatedStrings(keys: string[]): Observable<{ [key: string]: string }> {
    return this.translateService.get(keys);
  }
}
