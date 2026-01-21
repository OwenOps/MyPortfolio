import { Component } from '@angular/core';
import { lstSections, Sections } from 'src/app/core/models/sections';
import { BaseComponent } from '../../shared/base/base.component';
import { User, lstUser } from 'src/app/core/models/user';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlagsComponent } from '../flags/flags.component';
import { SideBarFooterComponent } from '../side-bar-footer/side-bar-footer.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [SharedModule, FlagsComponent, SideBarFooterComponent]
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
