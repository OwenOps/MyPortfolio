import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';

@Component({
    selector: 'app-button-next',
    templateUrl: './button-next.component.html',
    styleUrls: ['./button-next.component.scss'],
    standalone: false
})
export class ButtonNextComponent extends BaseComponent implements OnInit {
  @Input({ required: true }) showButton: boolean = false;
  @Input({ required: true }) pathNextPage: string = "";

  constructor() { super() }

  ngOnInit(): void {
    this.pathNextPage = `${this.pathNextPage}/${this.isPro}`
  }

  gotNextPage() {
    this.utilitiesService.goToAPage(this.pathNextPage);
  }
}
