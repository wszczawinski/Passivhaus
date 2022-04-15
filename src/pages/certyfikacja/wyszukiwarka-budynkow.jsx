import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout, ContainerColumn, ContainerBlue } from '../../components';
import { heroText } from '../../constants/heroContent';
import wyszukiwarka from '../../images/certyfikacja/wyszukiwarka.png';

export default function WyszukiwarkaBudynkow({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.certyfikacjaWyszukiwarkaBudynkow}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerBlue
                    text={
                        <>
                            <p>
                                <h3 className="title">
                                    Bazy danych dla projektów budownictwa pasywnego
                                </h3>
                                Wyszukiwarka ta jest projektem społecznym głównego Instytutu
                                Budownictwa Pasywnego w Darmstadt, Passivhaus Dienstleistung GmbH,
                                IG Passivhaus Deutschland Niemcy i Międzynarodowego Stowarzyszenia
                                Budownictwa Pasywnego (iPHA). Znajdą tutaj Państwo przegląd
                                zrealizowanych projektów budownictwa pasywnego z całego świata.
                                Jeśli zbudowali Państwo budynek pasywny lub taki znają, a nie ma go
                                w naszej bazie danych, proszę go zarejestrować lub dać podać
                                wymagane informacje zgodnie z procedurą rejestracji!
                            </p>
                            <a
                                className="wyszukiwarka"
                                href="http://www.passivhausprojekte.de/index.php"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={wyszukiwarka} alt="wyszukiwarka" />
                                Przejdź do wyszukiwarki!
                            </a>
                        </>
                    }
                    borderBottom
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Rejestracja projektu</h3> W tej bazie danych projektów rejestrujemy
                            wszystkie budynki pasywne za darmo, te już wybudowane i te, które są
                            wciąż w budowie. Warunkiem koniecznym jest możliwie jak najbardziej
                            kompletne wskazanie danych, które są wymienione w protokole projektu, a
                            także obliczeń wykonanych za pomocą pakietu do planowania budynków
                            pasywnych (PHPP) i co najmniej jedno zdjęcie. Wszyscy, którzy brali
                            udział w budowie muszą być poinformowane o publikacji i wyrazić na nią
                            zgodę. Rejestracja projektu odbywa się online przez architektów,
                            wykonawców lub inne zainteresowane osoby. <br />
                            Chętnie przyjmujemy informacje o jeszcze niewymienionych projektach:
                            <br />
                            <a
                                style={{ color: '#043454', fontWeight: '700' }}
                                href="mailto:passivhausprojekte@passivhaus-info.de"
                            >
                                passivhausprojekte@passivhaus-info.de
                            </a>
                            <br />
                            Serdecznie dziękujemy!
                        </p>
                    }
                    smallPadding
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3> Certyfikowane budynki pasywne</h3>
                            Standard budownictwa pasywnego określają odpowiednie kryteria
                            jakościowe, które mają pomóc wykonawcom i projektantom w realizacji
                            swoich przedsięwzięć. Projekty, które są znane jako „rzeczywiste budynki
                            pasywne” lub inaczej „budynki pasywne certyfikowane” i spełniają
                            kryteria weryfikacji PHPP. Certyfikację wykonuje się poprzez PHI lub
                            przez osoby upoważnione do tego przez PHI. Wyłącznym podmiotem
                            uprawnionym do certyfikacji w Polsce jest Polski Instytut Budownictwa
                            Pasywnego i Energii Odnawialnej im. Guntera Schlagowskiego NON-PROFIT
                            Sp. z o.o.
                        </p>
                    }
                    shortBorder
                    smallPadding
                    colorCream
                    noBorder
                />

                <ContainerColumn
                    textStart={
                        <p>
                            <h3>Wyłączenie odpowiedzialności</h3> Zawarte informacje na temat
                            projektu pochodzą od projektanta lub wykonawcy. Stale staramy się
                            rozszerzać ten zakres informacji i aktualizować go. Jednak za
                            poprawność, kompletność i aktualność tych danych ani my, ani osoby
                            trzecie, nie bierzemy odpowiedzialności. Odpowiedzialność za
                            jakiekolwiek szkody lub konsekwencje wynikające z używania oferowanej
                            wiedzy nie leży po naszej stronie. Również nie ponosimy
                            odpowiedzialności za to, że oferowane dane i informacje są wolne od osób
                            trzecich. Nie możemy również brać odpowiedzialności za poprawność,
                            kompletność i aktualność innych stron internetowych, do których Państwo
                            dotarli. Musimy wyraźnie zdystansować się od stron, które nie
                            przestrzegają praw lub dobrych obyczajów i które szkodzą interesom
                            rozwoju budownictwa pasywnego w Polsce i w Europie. Jeżeli takie
                            naruszenia zostaną dostrzeżone lub zgłoszone, aktywne linki zostaną
                            natychmiast trwale usunięte.
                        </p>
                    }
                    smallPadding
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query CertQuery3 {
        heroImage: file(relativePath: { eq: "heroImages/hero_certification.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
