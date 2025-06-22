import { Component, ElementRef, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: false
})
export class SkillsComponent extends BaseNextComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor() 
  { super() }

  ngOnInit() {
    this.pathNextPage = "work/"

    this.initialize('SKILLS.Subtitle', 'SKILLS.SectionTitle', this.typedElement, this.typedElement2, 500);
  }
}
