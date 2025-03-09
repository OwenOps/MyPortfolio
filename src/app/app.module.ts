import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//-------Component-------//
import { AppComponent } from './app.component';

//-------PrimeNG-------//
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';

//-------Service-------//
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { WorkComponent } from './components/pages/work/work.component';
import { OtherComponent } from './components/pages/other/other.component';
import { SideBarFooterComponent } from './components/layouts/side-bar-footer/side-bar-footer.component';
import { SideBarComponent } from './components/pages/side-bar/side-bar.component';
import { TimelineComponent } from './components/layouts/timeline/timeline.component';
import { AccordionComponent } from './components/layouts/accordion/accordion.component';
import { MusicComponent } from './components/layouts/music/music.component';
import { PhoneComponent } from './components/layouts/phone/phone.component';
import { GamesComponent } from './components/layouts/games/games.component';
import { ButtonNextComponent } from './components/layouts/button-next/button-next.component';
import { UtilitiesService } from './core/services/utilities/utilities.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    SideBarFooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    OtherComponent,
    SideBarComponent,
    TimelineComponent,
    AccordionComponent,
    MusicComponent,
    PhoneComponent,
    GamesComponent,
    ButtonNextComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    TimelineModule,
    CardModule,
    DropdownModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],

  providers: [UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
