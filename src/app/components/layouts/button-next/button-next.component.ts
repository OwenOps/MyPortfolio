import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-button-next',
    templateUrl: './button-next.component.html',
    styleUrls: ['./button-next.component.scss'],
    imports: [SharedModule]
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
