import { Component, Input } from '@angular/core';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-custom-loading',
  templateUrl: './custom-loading.component.html',
  styleUrl: './custom-loading.component.scss',
  imports: [SharedModule, PrimengModule],
})
export class CustomLoadingComponent {
  @Input({ required: true }) isLoading: boolean = false;
}
