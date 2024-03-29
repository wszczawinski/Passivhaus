export interface SubNavItem {
    name: string;
    path: string;
}

export const firmNavItems: SubNavItem[] = [
    { name: 'O nas', path: '/instytut' },
    { name: 'Partnerzy', path: '/instytut/partnerzy' },
    { name: 'Kontakt', path: '/instytut/kontakt' },
    { name: 'Zespół', path: '/instytut/zespol' },
];

export const certificationNavItems: SubNavItem[] = [
    { name: 'Informacje', path: '/certyfikacja' },
    // { name: 'Budynki', path: '/certyfikacja/budynkow' },
    // { name: 'Komponenty', path: '/certyfikacja/komponentow' },
    {
        name: 'Wyszukiwarka budynków pasywnych',
        path: '/certyfikacja/wyszukiwarka-budynkow',
    },
];

export const passivhausNavItems: SubNavItem[] = [
    { name: 'Charakterystyka', path: '/budynek-pasywny' },
    { name: 'Wymagania', path: '/budynek-pasywny/wymagania' },
    { name: 'Historia', path: '/budynek-pasywny/historia' },
];

export const workshopsNavItems: SubNavItem[] = [
    // { name: 'PHPP', path: '/szkolenia' },
    { name: 'CEPHd – Architektura, Projektowanie', path: '/szkolenia/projektant-doradztwa' },
    { name: 'CEPHt – Wykonawstwo, Nadzorowanie', path: '/szkolenia/mistrz-wykonawca' },
    // { name: 'Mostki cieplne', path: '/szkolenia/mostki-cieplne' },
    { name: 'Lista ekspertów', path: '/szkolenia/eksperci' },
];

export const shopNavItems: SubNavItem[] = [
    { name: 'Artykuły', path: '/sklep' },
    { name: 'Regulamin', path: '/sklep/regulamin' },
];
