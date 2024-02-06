import { Component } from '@angular/core';
import { Education } from 'src/app/models/education/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  events: Education[];

  constructor() {
      this.events = [
          { status: 'Futur', date: '2026', icon: 'pi pi-calendar',
          description: "After my bachelor's degree in technology, I'd like to go to a computer engineering school so that I can learn new things. It will depend on my motivations" },
          { status: 'Present', date: '2022-2023', icon: 'pi pi-eye',
          description: "I'm currently preparing a bachleor in technology at Paris cité. I am on an apprenticeship at a company in Suresnes. I'm working on a project to create a web application for the company's inventory." },
          { status: 'Past', date: '2020-2021', icon: 'pi pi-check-circle',
          description: "I went to a general high school and chose a technological specialization (STI2D). During those years, we created various iot-related projects using arduinos." },
      ];
  }
}
