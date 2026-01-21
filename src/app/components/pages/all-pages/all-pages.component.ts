import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { WorkComponent } from '../work/work.component';
import { HobbiesComponent } from '../hobbies/hobbies.component';

@Component({
  selector: 'app-all-pages',
  templateUrl: './all-pages.component.html',
  styleUrl: './all-pages.component.scss',
  imports: [SkillsComponent, AboutComponent, HomeComponent, WorkComponent, HobbiesComponent]
})
export class AllPagesComponent {

}
