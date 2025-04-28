import { Component } from '@angular/core';
import { lstSections, Sections } from 'src/app/core/models/sections';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  lstSection: Sections[] = lstSections;

  constructor
  (
    private readonly utilitiesService: UtilitiesService
  ) { }

  goToThePage(path: string): void {
    this.utilitiesService.goToAPage(`${path}/${this.utilitiesService.getProFromStorage()}`);
  }
}
