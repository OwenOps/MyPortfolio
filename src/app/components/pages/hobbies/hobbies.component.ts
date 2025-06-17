import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
    standalone: false
})
export class HobbiesComponent extends BaseNextComponent {
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
