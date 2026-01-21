import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';
import { TimelineComponent } from '../../layouts/timeline/timeline.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonNextComponent } from '../../layouts/button-next/button-next.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [SharedModule, TimelineComponent, ButtonNextComponent]
})
export class AboutComponent extends BaseNextComponent implements OnInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor
    (
  ) { super() }

  ngOnInit() {
    this.pathNextPage = "skills/";

    this.initialize('ABOUT.Title1', 'ABOUT.Title2', this.typedElement, this.typedElement2);
  }
}
