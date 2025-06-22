import { Component } from '@angular/core';
import { lstUser, User } from 'src/app/core/models/user';
import { DialogPreferencesComponent } from '../_dialogs/dialog-preferences/dialog-preferences.component';
import { BaseComponent } from '../../shared/base/base.component';

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
