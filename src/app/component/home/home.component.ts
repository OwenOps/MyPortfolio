import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;
  showButton: boolean = false;

  constructor
    (
      private readonly utilitiesServices: UtilitiesService
    ) { }

  ngOnInit() {
    const options = {
      strings: ['Hello,'],
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    const options2 = {
      strings: ['Welcome To My Portfolio !!'],
      startDelay: 980,
      typeSpeed: 40,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    new Typed(this.typedElement.nativeElement, options);
    new Typed(this.typedElement2.nativeElement, options2);

    setTimeout(() => {
      this.showButton = true;
    }, 2750);
  }

  goToAbout() {
    this.utilitiesServices.goToAPage(`about/${this.utilitiesServices.getProFromStorage()}`);
  }
}
