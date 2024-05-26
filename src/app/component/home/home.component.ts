import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonFunctionsService } from 'src/app/services/common-functions.service';
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

  constructor(private commonFunctionService : CommonFunctionsService) {}

  ngOnInit() {
    const options = {
      strings: ['Hello,'],
      typeSpeed: 120,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    const options2 = {
      strings: ['Welcome To My Portfolio !!'],
      startDelay: 1200,
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    new Typed(this.typedElement.nativeElement, options);
    new Typed(this.typedElement2.nativeElement, options2);

    setTimeout(() => {
      this.showButton = true;
    }, 4200);
  }

  goToAbout() {
    this.commonFunctionService.goToAPage("about");
  }
}
