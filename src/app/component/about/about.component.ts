import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
  (
    private readonly utilitiesServices: UtilitiesService
  ) {}

  ngOnInit() {
    const options = {
      strings: ['ABOUT ME'],
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    const options2 = {
      strings: ['WHO AM I ?'],
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    new Typed(this.typedElement.nativeElement, options);
    new Typed(this.typedElement2.nativeElement, options2);
  }

  goToSkills() {
    this.utilitiesServices.goToAPage(`skills/${this.utilitiesServices.getProFromStorage()}`);
  }
}
