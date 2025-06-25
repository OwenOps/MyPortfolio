import { Component } from '@angular/core';
import { IconComponent } from "../../layouts/icon/icon.component";
import { lstUser, User } from 'src/app/core/models/user';
import { TagModule } from 'primeng/tag';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cv',
  imports: [IconComponent, TagModule, SpeedDialModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  items!: MenuItem[];

  user: User = lstUser[0];

  ngOnInit() {
    this.items = [
      {
        label: 'Add',
        icon: 'pi pi-cog',
        command: () => {
          
        },
      },
      {
        label: 'Download CV',
        icon: 'pi pi-cog',
        command: () => {
          
        },
      },
    ];
  }
}
