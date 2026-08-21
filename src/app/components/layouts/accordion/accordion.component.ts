import { Component } from '@angular/core';
import { AccordionWork, lstworks, WorkKind } from 'src/app/core/models/accordion-work';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    imports: [SharedModule]
})
export class AccordionComponent {
    private readonly previewCount = 3;

    showAll = false;
    openIndex = 0;
    activeFilter: 'all' | WorkKind = 'all';
    lstworks = lstworks;

    readonly filters: { value: 'all' | WorkKind; labelKey: string }[] = [
        { value: 'all', labelKey: 'WORK.FilterAll' },
        { value: 'web', labelKey: 'WORK.FilterWeb' },
        { value: 'mobile', labelKey: 'WORK.FilterMobile' },
        { value: 'tool', labelKey: 'WORK.FilterTools' },
        { value: 'school', labelKey: 'WORK.FilterSchool' },
    ];

    get filteredWorks(): AccordionWork[] {
        if (this.activeFilter === 'all') {
            return this.lstworks;
        }

        return this.lstworks.filter(work => work.kind === this.activeFilter);
    }

    get visibleWorks(): AccordionWork[] {
        if (this.showAll) {
            return this.filteredWorks;
        }

        return this.filteredWorks.slice(0, this.previewCount);
    }

    get canToggleMore(): boolean {
        return this.filteredWorks.length > this.previewCount;
    }

    setFilter(filter: 'all' | WorkKind): void {
        this.activeFilter = filter;
        this.showAll = false;
        this.openIndex = 0;
    }

    toggle(index: number): void {
        this.openIndex = this.openIndex === index ? -1 : index;
    }

    kindLabel(kind: WorkKind): string {
        const labels: Record<WorkKind, string> = {
            web: 'WORK.KindWeb',
            mobile: 'WORK.KindMobile',
            tool: 'WORK.KindTool',
            school: 'WORK.KindSchool',
        };

        return labels[kind];
    }

    toggleShowMore() {
        this.showAll = !this.showAll;
        this.openIndex = 0;
    }
}
