import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.scss'],
    standalone: false
})
export class OtherComponent extends BaseNextComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
    (
      protected utilitiesServices: UtilitiesService
    ) { super(utilitiesServices) }

  override ngOnInit() {
    super.ngOnInit('HOBBIES.Subtitle', 'HOBBIES.SectionTitle', this.typedElement, this.typedElement2)
  }
}
