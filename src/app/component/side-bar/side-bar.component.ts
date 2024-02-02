import { Component, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @ViewChild('mainContent') mainContent!: ElementRef;
  activeNavItem: string = '';

  ngAfterViewInit() {
    console.log(this.mainContent);
  }

  setActiveNavItem(navItem: string) {
    this.activeNavItem = navItem;
    // console.log(this.mainContent)

    // const element = this.mainContent.nativeElement.querySelector(`#${navItem}`);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
  }
}
