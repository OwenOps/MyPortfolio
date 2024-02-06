import { Component, HostListener  } from '@angular/core';
import * as SmoothScroll from "smooth-scroll";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeNavItem: string = '';

  ngOnInit() {
    const scroll = new SmoothScroll('a[href*="#"]');
  }

  setActiveNavItem(navItem: string) {
    this.activeNavItem = navItem;
  }

  currentSection = 1;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;

    // Changer de section si l'utilisateur a défilé jusqu'à une certaine position
    if (scrolled > windowHeight * this.currentSection) {
      this.currentSection++;
      // Assurez-vous que la section suivante existe avant de faire défiler
      const nextSection = document.getElementById(`section${this.currentSection}`);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
