import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Sections, lstSections } from 'src/app/models/sections';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  lstSection: Sections[] = lstSections;

  constructor(private readonly utilitiesService: UtilitiesService, protected translate: TranslateService) { }

  goToThePage(path: string): void {
    this.utilitiesService.goToAPage(`${path}/${this.utilitiesService.getProFromStorage()}`);
  }
}
