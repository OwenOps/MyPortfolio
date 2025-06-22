import { Component } from '@angular/core';
import { lstSections, Sections } from 'src/app/core/models/sections';
import { lstUser, User } from 'src/app/core/models/user';
import { BaseComponent } from '../../shared/base/base.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: false
})
export class SideBarComponent extends BaseComponent {
  lstSection: Sections[] = lstSections;
  sideBarActive: boolean = false;
  currentUser: User = lstUser[0];

  constructor() { super() }

  goToThePage(path: string): void {
    if (!this.isSinglePage)
      this.utilitiesService.goToAPage(`${path}/${this.isPro}`);
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

  toggleSidebar() {
    this.sideBarActive = !this.sideBarActive;
  }
}
