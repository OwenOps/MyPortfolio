import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseNextComponent } from '../../shared/base-next/base-next.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonNextComponent } from '../../layouts/button-next/button-next.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SharedModule, ButtonNextComponent]
})
export class HomeComponent extends BaseNextComponent implements OnInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;
  @ViewChild('typedElement2', { static: true }) typedElement2!: ElementRef;

  showButton: boolean = false;
  private readonly showDelayButton: number = 980;

  constructor
    (
      
    ) { super() }

  ngOnInit(): void {
    this.pathNextPage = "about/";

    this.initialize('HOME.Hello', 'HOME.Welcome', this.typedElement, this.typedElement2, this.showDelayButton);

    setTimeout(() => {
      this.showButton = true;
    }, 2750);
  }
}
