import { Component } from '@angular/core';
import { DialogPreferencesComponent } from '../_dialogs/dialog-preferences/dialog-preferences.component';
import { BaseComponent } from '../../shared/base/base.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { User, lstUser } from 'src/app/core/models/user';
import { SocialMediaComponent } from '../social-media/social-media.component';

export interface Country {
  name: string,
  code: string,
}

@Component({
  selector: 'app-side-bar-footer',
  templateUrl: './side-bar-footer.component.html',
  styleUrls: ['./side-bar-footer.component.scss'],
  imports:[SharedModule, SocialMediaComponent]
})
export class SideBarFooterComponent extends BaseComponent {
  countries: Country[] | undefined;
  currentUser: User = lstUser[0];

  selectedCountry: Country | undefined;

  settingHover: boolean = false;

  constructor() { super() }

  openDialog() {
    this.utilitiesService.openDialog(DialogPreferencesComponent, "Preferences");
  }
}
