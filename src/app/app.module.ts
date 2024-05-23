import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//-------Component-------//
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { EducationComponent } from './component/education/education.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperiencesComponent,
    WorkComponent,
    OtherComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
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
