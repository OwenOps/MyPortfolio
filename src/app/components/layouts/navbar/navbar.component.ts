import { Component } from '@angular/core';
import { lstSections, Sections } from 'src/app/core/models/sections';
import { lstUser, User } from 'src/app/core/models/user';
import { BaseComponent } from '../../shared/base/base.component';
import { DialogPreferencesComponent } from '../_dialogs/dialog-preferences/dialog-preferences.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent extends BaseComponent {
  isMenuOpen: boolean = false;
  lstSection: Sections[] = lstSections;
  currentUser: User = lstUser[0];

  settingHover: boolean = false;

  constructor() { super() }

  goToThePage(path: string): void {
    if (!this.isSinglePage) {
      this.utilitiesService.goToAPage(`${path}/${this.isPro}`);
      this.isMenuOpen = false;
    }
    this.goToSection(path);
  }

  goToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (!section)
      return;

    if (this.isPhoneSize) {
      const offset = 100;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    else section.scrollIntoView({ behavior: 'smooth' });
  }

  openDialog() {
    this.utilitiesService.openDialog(DialogPreferencesComponent, "Preferences");
  }
}
