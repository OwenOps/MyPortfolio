import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from './constants/language.constants';
import { APP_CONSTANTS } from './constants/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class AppComponent {

  constructor
    (
      private readonly translate: TranslateService,
    ) {
    translate.addLangs(['en', 'fr']);
  }

  ngOnInit(): void {
    let currentLang = window.localStorage.getItem(APP_CONSTANTS.LANGUAGE_LOCAL_STORAGE)

    if (currentLang != null)
      this.translate.setDefaultLang(currentLang);
    else this.translate.setDefaultLang(LANGUAGES.FR);
  }
}
