import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Country {
  name: string,
  code: string,
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  countries: Country[] | undefined;

  selectedCountry: Country | undefined;

  constructor(protected translate: TranslateService) { }

  ngOnInit() {
    this.countries = [
      { name: 'France', code: 'FR' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' }
    ];
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
