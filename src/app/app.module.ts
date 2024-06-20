import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//-------Component-------//
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { WorkComponent } from './component/work/work.component';
import { OtherComponent } from './component/other/other.component';
import { FooterComponent } from './component/footer/footer.component';

//-------PrimeNG-------//
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//-------Service-------//
import { CommonFunctionsService } from './services/common-functions.service';
import { AppRoutingModule } from './app-routing.module';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { TimelineComponent } from './layouts/timeline/timeline.component';
import { AccordionComponent } from './layouts/accordion/accordion.component';
import { MusicComponent } from './layouts/music/music.component';
import { PhoneComponent } from './layouts/phone/phone.component';
import { GamesComponent } from './layouts/games/games.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
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
    GamesComponent
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
    AccordionModule,
    BrowserAnimationsModule,
    ButtonModule,
  ],

  providers: [CommonFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
