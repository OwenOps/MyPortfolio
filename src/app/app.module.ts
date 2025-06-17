import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

//-------Component-------//
import { AppComponent } from './app.component';

//-------Service-------//
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { WorkComponent } from './components/pages/work/work.component';
import { OtherComponent } from './components/pages/other/other.component';
import { SideBarFooterComponent } from './components/layouts/side-bar-footer/side-bar-footer.component';
import { SideBarComponent } from './components/layouts/side-bar/side-bar.component';
import { TimelineComponent } from './components/layouts/timeline/timeline.component';
import { AccordionComponent } from './components/layouts/accordion/accordion.component';
import { MusicComponent } from './components/layouts/music/music.component';
import { PhoneComponent } from './components/layouts/phone/phone.component';
import { GamesComponent } from './components/layouts/games/games.component';
import { ButtonNextComponent } from './components/layouts/button-next/button-next.component';
import { UtilitiesService } from './core/services/utilities/utilities.service';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { PrimengModule } from './shared/primeng.module';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './components/shared/pipe/safe-url.pipe';
import { FlagsComponent } from './components/layouts/flags/flags.component';
import { definePreset } from '@primeng/themes';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const IndigoAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{indigo.50}',
      100: '{indigo.100}',
      200: '{indigo.200}',
      300: '{indigo.300}',
      400: '{indigo.400}',
      500: '{indigo.500}',
      600: '{indigo.600}',
      700: '{indigo.700}',
      800: '{indigo.800}',
      900: '{indigo.900}',
      950: '{indigo.950}'
    }
  }
});

@NgModule({
  declarations:
    [
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
      NavbarComponent,
      FlagsComponent
    ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    AppRoutingModule,
    FormsModule,
    PrimengModule,
    SafeUrlPipe
  ],
  providers: [
    UtilitiesService,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        // preset: IndigoAura,
        options: {
          darkModeSelector: false,
          cssLayer: {
            name: 'primeng',
            order: 'primeng, theme'
          }
        }
      }
    }),
  ]
})
export class AppModule { }
