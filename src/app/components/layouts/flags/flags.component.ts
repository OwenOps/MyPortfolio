import { Component } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { LANGUAGES } from 'src/app/constants/language.constants';
import { Flag } from 'src/app/core/models/flags';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.scss',
  standalone: false
})
export class FlagsComponent {

  languagesOption: string[] = [];
  selectedLanguage: string = localStorage.getItem(APP_CONSTANTS.LANGUAGE_LOCAL_STORAGE) ?? LANGUAGES.FR;

  constructor
    (
      private readonly utilities: UtilitiesService
    ) {
  }

  ngOnInit(): void {
    this.languagesOption = [LANGUAGES.EN, LANGUAGES.FR];
  }

  changeSiteLanguage(selectedLanguage: string) {
    this.utilities.changeSiteLanguage(selectedLanguage);
  }
}
