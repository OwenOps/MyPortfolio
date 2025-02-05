import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

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

  constructor
  (
    private readonly translate: TranslateService,
    protected utilitiesService: UtilitiesService
  ) { }

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
