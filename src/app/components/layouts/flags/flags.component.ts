import { Component, OnInit } from '@angular/core';
import { APP_CONSTANTS } from 'src/app/constants/app.constants';
import { LANGUAGES } from 'src/app/constants/language.constants';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrl: './flags.component.scss',
  imports: [SharedModule, PrimengModule]
})
export class FlagsComponent implements OnInit {

  languagesOption: string[] = [];
  selectedLanguage: string = localStorage.getItem(APP_CONSTANTS.LANGUAGE_LOCAL_STORAGE) ?? LANGUAGES.EN;

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
