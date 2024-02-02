import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//-------Component-------//
import { AppComponent } from './app.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { FooterComponent } from './component/footer/footer.component';

//-------PrimeNG-------//
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SkillsComponent } from './component/skills/skills.component';
import { EducationComponent } from './component/education/education.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { WorkComponent } from './component/work/work.component';
import { BlogComponent } from './component/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperiencesComponent,
    WorkComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
