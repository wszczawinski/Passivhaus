import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';
import zespolImg from '../../images/firm/zespol.png';

import './Firm.scss';

export default function Team({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.instytutZespół}
            heroClass={'hero__subpage'}
            heroBackgroundImage={heroImage}
        >
            <section className="layout-content">
                <div className='team'>
                    <p>
                        Naszym podejściem jest pełne zweryfikowanie Twojego marzenia, czyli projektu
                        budynku, zgodnie z wiodącymi na świecie zasadami energooszczędnego
                        projektowania. My nie skupiamy się na pięknym efekcie architektonicznym (to
                        pozostawiamy naszym utalentowanym absolwentom - CEPHdesigners ). Wdrażamy
                        zasady projektowania budynków pasywnych we wszystkie sprawdzane przez nas
                        projekty, tak aby każda zweryfikowana przez naszych certyfikatorów
                        dokumentacja rokowała możliwie wysoką efektywność energetyczną.
                    </p>
                    <p>
                        Zrównoważony rozwój dotyczy każdego aspektu naszego życia. Naszym zdaniem
                        efektywność energetyczna jest tak samo ważna jak styl architektoniczny. Obie
                        te kwestie wpływają na trwałość budynku i otaczające środowisko.
                    </p>
                </div>
                <img src={zespolImg} alt="Zespół" className="team-img" />
                <div className="team">
                    <ul>
                        <li>Maciej Kuzawiński - prezes PiBP </li>
                        <li>
                            Kamil Wiśniewski - dyrektor instytutu ds. szkoleń i rozwoju
                            <a href="mailto:kamil.wisniewski@pibp.pl"> kamil.wisniewski@pibp.pl</a>
                        </li>
                        <li>
                            Łukasz Krzysztoń - dyrektor ds. marketingu i sprzedaży
                            <a href="mailto:l.krzyszton@pibp.pl"> l.krzyszton@pibp.pl</a>
                        </li>
                        <li>
                            Cezary Sankowski - kierownik akademii, certyfikator PIBP
                            <a href="mailto:cezary.sankowski@pibp.pl"> cezary.sankowski@pibp.pl</a>
                        </li>
                        <li>
                            Andrzej Górka - trener, certyfikator PIBP
                            <a href="mailto:andrzej.gorka@pibp.pl"> andrzej.gorka@pibp.pl</a>
                        </li>
                        <li>
                            Łukasz Smól - trener, certyfikator PIBP
                            <a href="mailto:lukasz.smol@pibp.pl "> lukasz.smol@pibp.pl </a>
                        </li>
                        <li>
                            Tomasz Pyszczek - trener, certyfikator PIBP
                            <a href="mailto:tomasz.pyszczek@pibp.pl">tomasz.pyszczek@pibp.pl</a>
                        </li>
                        <li>
                            Marcin Stelmach - trener, certyfikator PIBP
                            <a href="mailto:marcin.stelmach@pibp.pl"> marcin.stelmach@pibp.pl</a>
                        </li>
                        <li>
                            Sławomir Tomasz Kwiatkowski - ekspert ds. certyfikacji komponentów
                            <a href="mailto: s.kwiatkowski@pibp.pl"> s.kwiatkowski@pibp.pl</a>
                        </li>
                        <li>
                            Halina Fiuczek - księgowość - tel. +48 (58) 524 12 00
                            <a href="mailto:h.fiuczek@pibp.pl"> h.fiuczek@pibp.pl</a>
                        </li>
                    </ul>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query InstQuery3 {
        heroImage: file(relativePath: { eq: "heroImages/hero_team.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;
