import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//-------Component-------//
import { AppComponent } from './app.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { FooterComponent } from './component/footer/footer.component';

//-------PrimeNG-------//
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
