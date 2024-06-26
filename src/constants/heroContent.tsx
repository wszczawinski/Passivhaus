import React, { ReactNode } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { LuNewspaper } from 'react-icons/lu';

interface IHeroText {
    [key: string]: ReactNode;
}

export const heroText: IHeroText = {
    home: <p>{/* ALE PRZYSZŁOŚĆ <br /> TWORZYMY <br /> <u>AKTYWNIE</u> */}</p>,
    blog: (
        <p>
            <LuNewspaper /> Blog
        </p>
    ),
    instytutOnas: (
        <p>
            Instytut <br />
            <BsArrowReturnRight /> O nas
        </p>
    ),
    instytutKontakt: (
        <p>
            Instytut <br />
            <BsArrowReturnRight /> Kontakt
        </p>
    ),
    instytutPartnerzy: (
        <p>
            Instytut <br />
            <BsArrowReturnRight /> Partnerzy
        </p>
    ),
    instytutZespół: (
        <p>
            Instytut <br />
            <BsArrowReturnRight /> Zespół
        </p>
    ),
    passivhausHistoria: (
        <p>
            Budynek pasywny <br />
            <BsArrowReturnRight /> Historia
        </p>
    ),
    passivhausCharakterystyka: (
        <p>
            Budynek pasywny <br />
            <BsArrowReturnRight /> Charakterystyka
        </p>
    ),
    passivhausInstrukcja: (
        <p>
            Budynek pasywny <br />
            <BsArrowReturnRight /> Instrukcja
        </p>
    ),
    passivhausPassipedia: (
        <p>
            Budynek pasywny <br />
            <BsArrowReturnRight /> Passipedia
        </p>
    ),
    passivhausWymagania: (
        <p>
            Budynek pasywny <br />
            <BsArrowReturnRight /> Wymagania
        </p>
    ),
    certyfikacja: (
        <p>
            Certyfikacja <br />
            <BsArrowReturnRight /> Informacje
        </p>
    ),
    certyfikacjaBudynkow: (
        <p>
            Certyfikacja <br />
            <BsArrowReturnRight /> Budynków
        </p>
    ),
    certyfikacjaKomponentow: (
        <p>
            Certyfikacja <br />
            <BsArrowReturnRight /> Komponentów
        </p>
    ),
    certyfikacjaWyszukiwarkaBudynkow: (
        <p>
            Certyfikacja <br />
            <BsArrowReturnRight /> Wyszukiwarka budynków pasywnych
        </p>
    ),
    workshopsPhpp: (
        <p>
            Szkolenia <br />
            <BsArrowReturnRight /> PHPP
        </p>
    ),
    workshopsProjektant: (
        <p>
            {/*TODO: remove comment here once proper hero image in this section is provided */}
            {/* Szkolenia <br />
            <BsArrowReturnRight /> CEPHD - projektant doradztwa */}
        </p>
    ),
    workshopsMistrz: (
        <p>
            Szkolenia <br />
            <BsArrowReturnRight /> CEPHT - mistrz wykonawca
        </p>
    ),
    workshopsMostki: (
        <p>
            Szkolenia <br />
            <BsArrowReturnRight /> Mostki termiczne
        </p>
    ),
    workshopsEksperci: (
        <p>
            Szkolenia <br />
            <BsArrowReturnRight /> Lista ekspertów
        </p>
    ),
    literatureNarzedzia: <p>Narzędzia</p>,
    literatureWyszukiwarka: (
        <p>
            Literatura <br />
            <BsArrowReturnRight /> Wyszukiwarka Budynków pasywnych
        </p>
    ),
    ambassador: <p>Ambasador Budownictwa Pasywnego</p>,
    ambassadorPartnerzy: (
        <p>
            Ambasador Budownictwa Pasywnego <br />
            <BsArrowReturnRight /> Lista ambasadorów
        </p>
    ),
    ambassadorFormularz: (
        <p>
            Ambasador Budownictwa Pasywnego <br />
            <BsArrowReturnRight /> Formularz
        </p>
    ),
};
