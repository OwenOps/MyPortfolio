import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
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

  constructor
    (
      utilitiesServices: UtilitiesService
    ) { super(utilitiesServices) }

  override ngOnInit() {
    this.pathNextPage = "work/"

    super.ngOnInit('SKILLS.Subtitle', 'SKILLS.SectionTitle', this.typedElement, this.typedElement2)
  }
}
