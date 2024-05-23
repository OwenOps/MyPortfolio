import { CommonFunctionsService } from './../../services/common-functions.service';
import { Component } from '@angular/core';
import { Sections, lstSections } from 'src/app/models/sections';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  lstSection: Sections[] = lstSections;

  constructor(private commonFunctionService: CommonFunctionsService) { }

  goToThePage(path: string): void {
    this.commonFunctionService.goToAPage(path);
  }
}
