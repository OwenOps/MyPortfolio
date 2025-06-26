import { Component } from '@angular/core';
import { IconComponent } from "../../layouts/icon/icon.component";
import { lstUser, User } from 'src/app/core/models/user';
import { TagModule } from 'primeng/tag';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import { DialogPreferencesComponent } from '../../layouts/_dialogs/dialog-preferences/dialog-preferences.component';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';
import { BaseComponent } from '../../shared/base/base.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  imports: [IconComponent, TagModule, SpeedDialModule, TranslateModule, TooltipModule, CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent extends BaseComponent {
  items!: MenuItem[];

  user: User = lstUser[0];

  constructor
    (private readonly utilities: UtilitiesService) {
    super()
  }

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-cog',
        command: () => {
          this.utilities.openDialog(DialogPreferencesComponent, "Preferences")
        },
      },
      // {
      //   label: 'Download CV',
      //   icon: 'pi pi-download',
      //   command: () => {

      //   },
      // },
    ];
  }

  ngAfterViewInit() {
    if (this.isPhoneSize)
      document.body.style.zoom = '60%';
    else document.body.style.zoom = '77%';
  }
}
