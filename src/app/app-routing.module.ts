import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SkillsComponent } from './components/pages/skills/skills.component';
import { WorkComponent } from './components/pages/work/work.component';
import { HobbiesComponent } from './components/pages/hobbies/hobbies.component';
import { StatusGuard } from './guard/auth.guard';
import { AllPagesComponent } from './components/pages/all-pages/all-pages.component';
import { CvComponent } from './components/pages/cv/cv.component';

// Parameter is for showing professional portfolio or not
const routes: Routes = [
  { path: 'home/:isPro', component: HomeComponent, canActivate: [StatusGuard] },
  { path: 'about/:isPro', component: AboutComponent, canActivate: [StatusGuard] },
  { path: 'skills/:isPro', component: SkillsComponent, canActivate: [StatusGuard] },
  { path: 'work/:isPro', component: WorkComponent, canActivate: [StatusGuard] },
  { path: 'hobbies/:isPro', component: HobbiesComponent, canActivate: [StatusGuard], },
  { path: 'portfolio/:isPro', component: AllPagesComponent, canActivate: [StatusGuard] },
  { path: 'cv/true', component: CvComponent },
  { path: '', redirectTo: 'home/true', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/true', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], // Reevaluate if one parameter changed
  exports: [RouterModule]
})
export class AppRoutingModule { }
