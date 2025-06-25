import { Component } from '@angular/core';
import { IconComponent } from "../../layouts/icon/icon.component";
import { lstUser, User } from 'src/app/core/models/user';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-cv',
  imports: [IconComponent, TagModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {

  user: User = lstUser[0];
}
