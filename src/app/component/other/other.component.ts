import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
    (
      protected readonly utilitiesServices: UtilitiesService
    ) { }

  ngOnInit() {
    const options = {
      strings: ['HOBBIES'],
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    const options2 = {
      strings: ['OTHER'],
      typeSpeed: 70,
      backSpeed: 0,
      loop: false,
      showCursor: false,
    };

    new Typed(this.typedElement.nativeElement, options);
    new Typed(this.typedElement2.nativeElement, options2);
  }
}
