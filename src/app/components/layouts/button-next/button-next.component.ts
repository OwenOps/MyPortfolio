import { Component, Input, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/core/services/utilities/utilities.service';

@Component({
  selector: 'app-button-next',
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.scss']
})
export class ButtonNextComponent implements OnInit {
  @Input({ required: true }) showButton: boolean = false;
  @Input({ required: true }) pathNextPage: string = "";

  constructor(private readonly utilities: UtilitiesService) { }

  ngOnInit(): void {
    this.pathNextPage = `${this.pathNextPage}/${this.utilities.getProFromStorage()}`
  }

  gotNextPage() {
    this.utilities.goToAPage(this.pathNextPage);
  }
}
