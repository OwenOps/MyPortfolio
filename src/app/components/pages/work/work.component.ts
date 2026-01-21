import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccordionComponent } from '../../layouts/accordion/accordion.component';
import { ButtonNextComponent } from '../../layouts/button-next/button-next.component';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss'],
    imports: [SharedModule, AccordionComponent, ButtonNextComponent]
})
export class WorkComponent extends BaseNextComponent implements OnInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
    (
      
    ) { super() }

  ngOnInit() {
    this.pathNextPage = "hobbies/"

    this.initialize('WORK.Subtitle', 'WORK.SectionTitle', this.typedElement, this.typedElement2)
  }
}
