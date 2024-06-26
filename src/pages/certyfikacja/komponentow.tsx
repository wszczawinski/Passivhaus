import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { Layout, ContainerColumn, TransparentContainer, FullImageContainer } from '@/components';
import { heroText } from '@/constants/heroContent';
import okna from '@/images/certyfikacja/okna.svg';

export default function Components({ data }: PageProps<Queries.ComponentsQuery>) {
    const heroImage = getImage(data.heroImage);

    return (
        <Layout heroTextContent={heroText.certyfikacjaKomponentow} heroBackgroundImage={heroImage} heroClass={'hero__subpage'}>
            <section className="layout-content">
                <ContainerColumn
                    textStart={
                        <>
                            <h2>Informacje o certyfikacji</h2>
                            <p>
                                okiennych, wysoce wydajnych urządzeń wentylacyjnych, szczegółowych połączeń wolnych od mostków termicznych, przeszkleń, które
                                pozwalają na docieranie słońca, urządzenia kompaktowe tip. Certyfikowane produkty budownictwa pasywnego pozwalają użytkownikowi
                                jednoznacznie określić i porównać odpowiednie cechy produktów. Odpowiednie doświadczenie przy poprzednich projektach zabudowań
                                pasywnych pozwala Instytutowi Budownictwa Pasywnego sformułować praktyczne, łatwe do sprawdzenia i jasno sprecyzowane kryteria,
                                które powinny być spełnione przez produkty do budownictwa pasywnego. Kryteria te odnoszą się wyłącznie do dwóch obszarów:
                                <p>- zdrowie i komfort mieszkalny ("kryteria komfortu")</p>
                                <p>- energetyczny w praktyce ("kryteria energetyczne")</p>
                                Instytut Budownictwa Pasywnego ustanowił sobie odpowiednio za cel, obiektywnie ustalić poziom wymagań fizycznych lub
                                fizjologicznych (np. max. różnica temperatur promieniowanie 5 K między pomieszczeniami, pochodząca z normy ISO 7730). Tam, gdzie
                                samo to nie wystarcza dla sformułowania, zostały wprowadzone kategorie efektywności (na przykład w oknach budynków pasywnych).
                                Jeśli jest to możliwe formułuje się kryteria niezależne od klimatu. Jednak zazwyczaj jest to mniej przejrzyste dla użytkownika -
                                w związku z tym stosowane są również zdefiniowane kryteria dla określonych warunkach klimatycznych. Wszystkie kryteria muszą być
                                określone w mierzalnych wielkościach i zweryfikowane przez pomiary ustalonymi metodami. W certyfikacie są podane informacje
                                dotyczące bilansu energetycznego i ewentualne obliczenia wskazanych dech każdego produktu. Mogą one być wprowadzone bezpośrednio
                                do PHPP. Parametry są określone tak, że ich wartości są w rzeczywistości charakterystyczne dla zachowań komponentu w praktycznie
                                zbudowanym budynku pasywnym (np. w odniesieniu do powłoki budynku na granicy bilansowej systemów wentylacyjnych). Parametry
                                występujące w każdym przypadku odnoszą się wyłącznie do odpowiedniego produktu. Ale mogą być też określone ewentualne
                                ograniczenia odnośnie mocowania w całej nieruchomości, np. montaż okna. Ograniczenia są zawsze wybierane w odniesieniu do
                                realistycznego praktycznego zastosowania, a nie w odniesieniu do sztucznych warunków laboratoryjnych.
                            </p>
                        </>
                    }
                    shortBorder
                />
                <FullImageContainer imgSrc={okna} imgAlt="okna" />
                <TransparentContainer
                    content={
                        <>
                            <h2>Korzyści Certyfikacji Komponentów do Budownictwa Pasywnego</h2>
                            <p>
                                Standard budownictwa pasywnego charakteryzuje się bardzo wysoką oszczędnością energii w porównaniu do tradycyjnych nowych
                                budynków. Oszczędności uzyskuje się przez wysoko wydajnościowe budynki i wyposażenie budowlane. Oprócz starannego planowania
                                zakłada się szczególne zastosowanie energooszczędnych komponentów. Z reguły te komponenty są od około dwóch do czterech razy tak
                                skuteczniejsze niż odpowiadające im powszechnie dostępne produkty. Ten wysokiej efektywności energetycznej jest kluczowe dla
                                osiągnięcia standardu domu pasywnego. Ta wysoka efektywność energetyczna jest kluczowa dla osiągnięcia standardu budownictwa
                                pasywnego. Jednak projektantowi często trudno ocenić elementy budowlane w odniesieniu do ich efektywności energetycznej, ich
                                trwałości i zastosowanej charakterystyki energetycznej: dostępne charakterystyki standaryzacji są często nierealne lub
                                niewystarczająco precyzyjne. Niezawodne projektowanie z samymi instrukcjami producenta jest często niemożliwe. Instytut
                                Budownictwa Pasywnego jako niezależny organ sprawdza i certyfikuje produkty pod względem ich przydatności do zastosowania w
                                budynkach pasywnych. Produkty posiadające certyfikat "Odpowiedni komponent do budownictwa pasywnego" są testowane według
                                pojedynczych kryteriów, w odniesieniu do ich cech porównywalnych i doskonałej jakości energii. Ich stosowanie ułatwia
                                projektantowi znacznie jego zadanie i znacząco przyczynia się do prawidłowego funkcjonowania budynku pasywnego.
                            </p>
                        </>
                    }
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query Components {
        heroImage: file(relativePath: { eq: "heroImages/hero_certification.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
