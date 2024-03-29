import phpp from '../images/sklep/phpp.svg';
import ogrzewanie from '../images/sklep/ogrzewanie.svg';
import budynekPas from '../images/sklep/bud-pas.svg';

export interface ShopItemProps {
    title: string;
    description: string[];
    price: string;
    img: string;
    alt?: string;
}

export const shopItems: ShopItemProps[] = [
    {
        title: 'Pakiet do projektowania budynków pasywnych PHPP',
        description: [
            'PHPP - narzędzie do planowania efektywności energetycznej budynków w Polsce i na Świecie w najnowszej polskiej wersji językowej',
            'PHPP to łatwe w użyciu oprogramowanie do planowania efektywności energetycznej przeznaczone głównie architektom i doradcom ds. planowania budynków. Jego największym atutem jest wiarygodność wyników i łatwość obsługi. W styczniu 2019 r. narzędzie (PHPP) w najnowszej wersji 9.6 zostało bardzo wysoko ocenione przy użyciu ANSI / ASHRAE Standard 140, metody testowania porównawczego programów energetycznych budynków. Warto nadmienić, że od pierwszych wersji PHPP wyróżniało się nadzwyczaj wysoką skutecznością w symulacjach zużycia energii w budynkach. Najnowsza wersja oprogramowania umożliwia precyzyjne zaplanowanie termomodernizacji starego budownictwa uwzględniając nawet takie szczegóły jak detale połączeń.',
            'Korzystając z narzędzia PHPP zyskujesz wiarygodne wyniki w zakresie:',
        ],
        price: '1353 zł (w tym 23% VAT)',
        img: phpp,
    },
    {
        title: 'Poradnik OGRZEWANIE I KLIMATYZACJA',
        description: [
            'Poradnik OGRZEWANIE I KLIMATYZACJA z uwzględnieniem chłodnictwa i zaopatrzenia w ciepłą wodę.',
            'Jest to drugie polskie wydanie doskonałego poradnika, które do tej pory stanowi niezbędne kompendium wiedzy na temat ogrzewania i klimatyzacji. To encyklopedyczne wydanie jest efektem wielomiesięcznej pracy zespołu profesjonalnych tłumaczy i konsultacji z krajowymi i zagranicznymi instytucjami badawczymi i naukowymi. Jest to podstawowy podręcznik do kształcenia kolejnych pokoleń inżynierów, techników, architektów i budowniczych. Poradnik, którego autorami są Recknagel, Sprenger , Honmann i Schramek zajmuje od wielu lat czołową pozycję w dziedzinie ogrzewnictwa i wentylacji. Udostępnienie go polskim specjalistom owocuje wprowadzaniem na polski rynek coraz to nowszych rozwiązań w zakresie szeroko pojętych instalacji.',
            'Tłumaczenie polskie jest oparte na 66 wyd. niemieckim poszerzone o nowe techniki i technologie Wydawnictwo: EWFE Gdańsk 1994',
        ],
        price: '89,25 zł (w tym 5% VAT)',
        img: ogrzewanie,
    },
    {
        title: 'Budownictwo Pasywne 2017 Materiały konferencyjne',
        description: [
            'BUDOWNICTWO PASYWNE 2017 - wydanie zawiera opis doświadczeń pionierów oraz podstawybudownictwa pasywnego.',
            'Publikacja wydana została w języku polskim z okazji jubileuszu 25 lecia budownictwa pasywnego na świecie przy okazji Forum Budownictwa Pasywnego i Energooszczędnego. Budownictwo Pasywne 2017 zawiera opisy zarówno pierwszych dokonań pionierskich, jak i jest swoistym zbiorem dobrych praktyk. W publikacji znajdują się również polskie przykłady stosowania standardu pasywnego.',
            'Publikacja zawiera dodatkowo informacje w zakresie podstaw budownictwa pasywnego, dlatego uznawana jest za poradnik dla osób zamierzających budować jak również początkujących branżystów.',
        ],
        price: '49,20 zł (w tym 23% VAT)',
        img: budynekPas,
    },
];
