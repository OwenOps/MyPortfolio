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
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';

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
    TooltipModule,
    DynamicDialogModule,
    SelectButtonModule,
    CheckboxModule,
    TextareaModule,
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
    TooltipModule,
    DynamicDialogModule,
    SelectButtonModule,
    CheckboxModule,
    TextareaModule,
  ],
  providers: [
    MessageService
  ]
})
export class PrimengModule { }
