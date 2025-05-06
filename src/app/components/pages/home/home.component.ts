import { Component, ElementRef, ViewChild } from '@angular/core';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent extends BaseNextComponent {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  showButton: boolean = false;
  private readonly showDelayButton: number = 980;

  constructor
    (
      utilitiesServices: UtilitiesService
    ) { super(utilitiesServices) }

  override ngOnInit() {
    this.pathNextPage = "about/";

    super.ngOnInit('Hello,', 'Welcome To My Portfolio !', this.typedElement, this.typedElement2, this.showDelayButton)

    setTimeout(() => {
      this.showButton = true;
    }, 2750);
  }
}
