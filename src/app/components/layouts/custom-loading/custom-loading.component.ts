import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrl: './custom-loading.component.scss',
  standalone: false,
})
export class CustomLoadingComponent {
  @Input({ required: true }) isLoading: boolean = false;
}
