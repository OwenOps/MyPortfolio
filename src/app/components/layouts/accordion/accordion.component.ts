import { Component } from '@angular/core';
import { AccordionWork, lstworks } from 'src/app/core/models/accordion-work';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    standalone: false
})
export class AccordionComponent {
    visibleItems = 4;

    showAll = false;
    lstworks = lstworks;

    toggleShowMore() {
        if (this.showAll) {
            this.visibleItems = 4;
        } else {
            this.visibleItems = this.lstworks.length; 
        }
        this.showAll = !this.showAll; // Alterner l'état
    }
}
