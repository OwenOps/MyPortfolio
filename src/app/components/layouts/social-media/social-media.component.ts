import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';

@Component({
  selector: 'app-social-media',
  imports: [CommonModule],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent extends BaseComponent {

}
