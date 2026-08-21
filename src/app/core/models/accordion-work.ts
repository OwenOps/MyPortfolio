export type WorkKind = 'web' | 'mobile' | 'tool' | 'school' | 'game';

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
            link: 'https://github.com/OwenOps/NamiFlow',
            descriptionKey: 'WORK.NamiFlowDesc',
            year: '2025',
            kind: 'tool',
            stack: ['Java', 'VirusTotal'],
            featured: true,
        },
        {
            titleKey: 'WORK.ProjectMobileAppTitle',
            link: 'https://github.com/OwenOps/PharmaSignal',
            descriptionKey: 'WORK.ProjectMobileAppDesc',
            year: '2024',
            kind: 'mobile',
            stack: ['Flutter', 'Firebase'],
            featured: true,
        },
        {
            titleKey: 'WORK.WorldZip',
            link: 'https://github.com/OwenOps/Minecraft-World-Zip',
            descriptionKey: 'WORK.WorldZipDesc',
            year: '2026',
            kind: 'game',
            stack: ['Java', 'Fabric', 'NeoForge'],
            featured: true,
        },
        {
            titleKey: 'WORK.WorldPreset',
            link: 'https://github.com/OwenOps/Minecraft-World-Preset',
            descriptionKey: 'WORK.WorldPresetDesc',
            year: '2026',
            kind: 'game',
            stack: ['Java', 'Fabric', 'NeoForge'],
        },
        {
            titleKey: 'WORK.ParkingClicker',
            link: 'https://github.com/OwenOps/ParkingClicker',
            descriptionKey: 'WORK.ParkingClickerDesc',
            year: '2025',
            kind: 'game',
            stack: ['C', 'Raylib'],
        },
        {
            titleKey: 'WORK.ProjectMastermindTitle',
            link: 'https://github.com/OwenOps/Mastermind',
            descriptionKey: 'WORK.ProjectMastermindDesc',
            year: '2023',
            kind: 'school',
            stack: ['VB.NET'],
        },
        {
            titleKey: 'WORK.ProjectGraphsTitle',
            link: 'https://github.com/OwenOps/Graphes',
            descriptionKey: 'WORK.ProjectGraphsDesc',
            year: '2023',
            kind: 'school',
            stack: ['Java', 'Dijkstra'],
        },
    ];
