import { Directive, ElementRef } from '@angular/core';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import Typed from 'typed.js';

@Directive({
  selector: 'app-base-next',
  standalone: false
})
export abstract class BaseNextComponent {
  pathNextPage: string = "";

  constructor
    (
      protected readonly utilities: UtilitiesService
    ) {

  }

  ngOnInit(stringOption1: string, stringOption2: string, typedElement: ElementRef, typedElement2: ElementRef, showDelay?: number): void {


    this.utilities.getTranslatedStrings([stringOption1, stringOption2]).subscribe(translations => {
      const opt1 = translations[stringOption1];
      const opt2 = translations[stringOption2];

      const options = {
        strings: [opt1],
        typeSpeed: 70,
        backSpeed: 0,
        loop: false,
        showCursor: false,
      };

      const options2 = {
        strings: [opt2],
        startDelay: showDelay ?? 0,
        typeSpeed: 70,
        backSpeed: 0,
        loop: false,
        showCursor: false,
      };

      if (typedElement.nativeElement) {
        new Typed(typedElement.nativeElement, options);
      }

      if (typedElement2.nativeElement) {
        new Typed(typedElement2.nativeElement, options2);
      }
    });
  }
}
