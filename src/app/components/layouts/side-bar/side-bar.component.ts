import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lstSections, Sections } from 'src/app/core/models/sections';
import { lstUser, User } from 'src/app/core/models/user';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss'],
    standalone: false
})
export class SideBarComponent {
  lstSection: Sections[] = lstSections;
  sideBarActive: boolean = false;
  currentUser: User = lstUser[0];

  constructor
    (
      private readonly utilitiesService: UtilitiesService,
      protected translate: TranslateService,
    ) { }

  goToThePage(path: string): void {
    this.utilitiesService.goToAPage(`${path}/${this.utilitiesService.getProFromStorage()}`);
  }

  toggleSidebar() {
    this.sideBarActive = !this.sideBarActive;
  }
}
