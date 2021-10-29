import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Ambassador, Firm, Passivhaus, Certification, Literature, Workshops } from './Layouts';
import { Navbar, Footer, Hero } from './components';
import heroFirmImage from './images/heroImages/hero_firma.png';
import heroPassivhausImage from './images/heroImages/hero_passivhaus.png';
import heroCertificationImage from './images/heroImages/hero_certification.png';
import heroWorkshopsImage from './images/heroImages/hero_workshops.png';
import heroLiteratureImage from './images/heroImages/hero_literature.png';
import heroAmbassadorImage from './images/heroImages/hero_ambassador.png';

import * as heroContent from './heroContent.json';

import './App.scss';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <header>
                    <Route exact path="/">
                        <Hero text={heroContent.firmHeroText} backgroundImage={heroFirmImage} />
                    </Route>
                    <Route path="/budynek-pasywny">
                        <Hero
                            text={heroContent.passivhausHeroText}
                            backgroundImage={heroPassivhausImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/certyfikacja">
                        <Hero
                            text={heroContent.certificationHeroText}
                            backgroundImage={heroCertificationImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/szkolenia">
                        <Hero
                            text={heroContent.workshopsHeroText}
                            backgroundImage={heroWorkshopsImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/literatura+narzedzia">
                        <Hero
                            text={heroContent.literatureHeroText}
                            backgroundImage={heroLiteratureImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/ambasador">
                        <Hero
                            text={heroContent.ambassadorHeroText}
                            backgroundImage={heroAmbassadorImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>

                    <Navbar />
                </header>

                <main>
                    <Switch>
                        <Route exact path="/">
                            <Firm />
                        </Route>
                        <Route path="/budynek-pasywny">
                            <Passivhaus />
                        </Route>
                        <Route path="/certyfikacja">
                            <Certification />
                        </Route>
                        <Route path="/szkolenia">
                            <Workshops />
                        </Route>
                        <Route path="/literatura+narzedzia">
                            <Literature />
                        </Route>
                        <Route path="/ambasador">
                            <Ambassador />
                        </Route>
                    </Switch>
                </main>

                <footer>
                    <Footer />
                </footer>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
