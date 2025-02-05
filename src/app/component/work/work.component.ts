import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
  (
    private readonly utilitiesServices: UtilitiesService
  ) { }

  ngOnInit() {
    const options = {
      strings: ['MY PROJECTS'],
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    const options2 = {
      strings: ['MY WORK'],
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    new Typed(this.typedElement.nativeElement, options);
    new Typed(this.typedElement2.nativeElement, options2);
  }

  goToOther() {
    this.utilitiesServices.goToAPage("other");
  }
}
