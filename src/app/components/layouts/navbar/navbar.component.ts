import { Component } from '@angular/core';
import { lstSections, Sections } from 'src/app/core/models/sections';
import { lstUser, User } from 'src/app/core/models/user';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  lstSection: Sections[] = lstSections;
  currentUser: User = lstUser[0];

  constructor
    (
      private readonly utilitiesService: UtilitiesService
    ) { }

  goToThePage(path: string): void {
    this.utilitiesService.goToAPage(`${path}/${this.utilitiesService.getProFromStorage()}`);
    this.isMenuOpen = false;
  }
}
