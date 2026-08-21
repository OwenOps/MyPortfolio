export type WorkKind = 'web' | 'mobile' | 'tool' | 'school';

export interface AccordionWork {
    titleKey: string;
    link: string;
    descriptionKey: string;
    year: string;
    kind: WorkKind;
    stack: string[];
    featured?: boolean;
}

export const lstworks: AccordionWork[] =
    [
        {
            titleKey: 'WORK.NamiFlow',
            link: 'https://github.com/OwenOps/NamiFlow.git',
            descriptionKey: 'WORK.NamiFlowDesc',
            year: '2025',
            kind: 'web',
            stack: ['C#', 'VirusTotal'],
            featured: true,
        },
        {
            titleKey: 'WORK.ProjectMobileAppTitle',
            link: 'https://github.com/OwenOps/PharmaSignal.git',
            descriptionKey: 'WORK.ProjectMobileAppDesc',
            year: '2024',
            kind: 'mobile',
            stack: ['Flutter', 'Firebase'],
            featured: true,
        },
        {
            titleKey: 'WORK.FolderCompare',
            link: 'https://github.com/OwenOps/SeekFilesCompare.git',
            descriptionKey: 'WORK.FolderCompareDesc',
            year: '2024',
            kind: 'tool',
            stack: ['C#', 'Excel'],
            featured: true,
        },
        {
            titleKey: 'WORK.ProjectMastermindTitle',
            link: 'https://github.com/OwenOps/Mastermind.git',
            descriptionKey: 'WORK.ProjectMastermindDesc',
            year: '2023',
            kind: 'school',
            stack: ['VB.NET'],
        },
        {
            titleKey: 'WORK.ProjectGraphsTitle',
            link: 'https://github.com/OwenOps/Graphes.git',
            descriptionKey: 'WORK.ProjectGraphsDesc',
            year: '2023',
            kind: 'school',
            stack: ['C++', 'Dijkstra'],
        },
        {
            titleKey: 'WORK.ProjectRedesignTitle',
            link: 'https://github.com/OwenOps/DevWebSae.git',
            descriptionKey: 'WORK.ProjectRedesignDesc',
            year: '2023',
            kind: 'school',
            stack: ['HTML', 'CSS'],
        },
    ];
