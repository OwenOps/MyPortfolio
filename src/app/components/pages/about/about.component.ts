import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false
})
export class AboutComponent extends BaseNextComponent {
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
