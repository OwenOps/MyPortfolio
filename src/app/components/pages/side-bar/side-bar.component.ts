import { Component, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lstSections, Sections } from 'src/app/core/models/sections';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  lstSection: Sections[] = lstSections;
  sideBarActive: boolean = false;

  constructor
    (
      private readonly utilitiesService: UtilitiesService,
      protected translate: TranslateService,
      private readonly ref: ElementRef
    ) { }

  ngAfterViewInit() {
    this.sideBarActive = window.innerWidth > 768;
  }

  goToThePage(path: string): void {
    this.utilitiesService.goToAPage(`${path}/${this.utilitiesService.getProFromStorage()}`);
  }

  toggleSidebar() {
    this.sideBarActive = !this.sideBarActive;
  }

  @HostListener('window:resize', ['$event'])
  hideSideBar() {
    if (window.innerWidth <= 768) this.sideBarActive = false;
  }
}
