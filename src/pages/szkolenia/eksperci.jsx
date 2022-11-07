import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { ContainerBlue, ContainerColumn, ContainerRow, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';
import expertImage from '../../images/szkolenia/expert.png';
import './Workshops.scss'

export default function Eksperci({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.workshopsEksperci}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <ContainerRow
                    text={
                        <p>
                            Budynki typu Passive House to budynki ultra energooszczędne, które
                            powinny zapewniać użytkownikom wysoki poziom komfortu i doskonałą jakość
                            powietrza przez całą dobę. Z wyglądu nie różnią się one od innych
                            budynków, ale przy ich budowie niezbędne jest szczegółowe planowanie i
                            staranne wykonanie. Te cechy są niezbędne do spełnienia wysokich wymagań
                            dotyczących przegród zewnętrznych budynku i zastosowanych w nim
                            technologii. W związku z tym rozwijający się rynek budownictwa pasywnego
                            w Polsce wymaga możliwie najlepiej wykwalifikowanych specjalistów,
                            którzy regularnie podnoszą swoje kompetencje poprzez udział w
                            realizacjach budynków pasywnych oraz interdyscyplinarnych doskonaleniach
                            zawodowych.
                        </p>
                    }
                    imgSrc={expertImage}
                    alt="Ekspert"
                    imgSmall
                />
                <ContainerColumn
                    textStart={
                        <p>
                            <h3 className="title">Lista polskich ekspertów</h3>
                            Zapraszamy do skorzystania z bazy polskich podwykonawców, którzy
                            uzyskali miano mistrzów budownictwa pasywnego w swojej dziedzinie. To
                            rzetelna wyszukiwarka firm i wykonawców dostępnych na polskim rynku,
                            którzy kompleksowo i z najwyższą dbałością zajmą się wykonaniem
                            poszczególnych etapów i/lub elementów budynków pasywnych.
                        </p>
                    }
                    textEnd={
                        <p>
                            <a
                                className="wyszukiwarka"
                                href="https://akademiazdrowegobudownictwa.pl/znajdz-mistrza/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Przejdź do wyszukiwarki polskich ekspertów
                            </a>
                        </p>
                    }
                />
                <ContainerColumn
                    textStart={
                        <p>
                            CEPHdesigner oraz CEPHtradesperson są jedynymi, akredytowanymi przez PHI
                            Darmstadt szkoleniami budowlanymi, które są dostosowane do polskich i
                            europejskich warunków rynkowych. Wszyscy absolwenci naszej akademii są
                            osobami kompetentnymi w prowadzeniu, projektowaniu i budowaniu wysokiej
                            jakości obiektów pasywnych.
                        </p>
                    }
                    colorCream
                    noBorder
                />
                <ContainerBlue
                    text={
                        <>
                            <h3>Listy ekspertów działających na całym świecie:</h3>
                            <a
                                className="wyszukiwarka"
                                href="https://cms.passivehouse.com/en/training/data/tradespersons/search/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Wyszukaj certyfikowanego mistrza
                            </a>
                            <a
                                className="wyszukiwarka"
                                href="https://cms.passivehouse.com/de/training/data/designers/search/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Wyszukaj certyfikowanego projektanta doradcę
                            </a>
                        </>
                    }
                    borderBottom
                />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query CertQuery4 {
        heroImage: file(relativePath: { eq: "heroImages/hero_experts.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
