import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lstUser, User } from 'src/app/core/models/user';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

export interface Country {
  name: string,
  code: string,
}

@Component({
    selector: 'app-side-bar-footer',
    templateUrl: './side-bar-footer.component.html',
    styleUrls: ['./side-bar-footer.component.scss'],
    standalone: false
})
export class SideBarFooterComponent {
  countries: Country[] | undefined;
  currentUser: User = lstUser[0];

  selectedCountry: Country | undefined;

  settingHover: boolean = false;

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
