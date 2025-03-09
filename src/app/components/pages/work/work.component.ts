import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends BaseNextComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
    (
      utilitiesServices: UtilitiesService
    ) { super(utilitiesServices) }

  override ngOnInit() {
    this.pathNextPage = "other/"

    super.ngOnInit('MY PROJECTS', 'MY WORK', this.typedElement, this.typedElement2)
  }
}
