import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonNextComponent } from '../../layouts/button-next/button-next.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [SharedModule, ButtonNextComponent]
})
export class SkillsComponent extends BaseNextComponent implements OnInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  constructor() 
  { super() }

  ngOnInit() {
    this.pathNextPage = "work/"

    this.initialize('SKILLS.Subtitle', 'SKILLS.SectionTitle', this.typedElement, this.typedElement2, 500);
  }
}
