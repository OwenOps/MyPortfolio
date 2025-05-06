import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    InputNumberModule,
    AutoCompleteModule,
    ToastModule,
    MessageModule,
    FloatLabelModule,
    SelectModule,
    TagModule,
    ProgressSpinnerModule,
  ],
  exports: [
    ButtonModule,
    CommonModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    InputNumberModule,
    AutoCompleteModule,
    ToastModule,
    MessageModule,
    FloatLabelModule,
    SelectModule,
    TagModule,
    ProgressSpinnerModule,
  ],
  providers: [
    MessageService
  ]
})
export class PrimengModule { }
