import { Component } from '@angular/core';
import { lstworks } from 'src/app/core/models/accordion-work';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    imports: [SharedModule]
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
