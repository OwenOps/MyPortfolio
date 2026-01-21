import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';
import { PhoneComponent } from '../../layouts/phone/phone.component';
import { MusicComponent } from '../../layouts/music/music.component';
import { GamesComponent } from '../../layouts/games/games.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  imports: [SharedModule, PhoneComponent, MusicComponent, GamesComponent]
})
export class HobbiesComponent extends BaseNextComponent implements OnInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
    (
  ) { super() }

  ngOnInit() {
    this.initialize('HOBBIES.Subtitle', 'HOBBIES.SectionTitle', this.typedElement, this.typedElement2)
  }
}
