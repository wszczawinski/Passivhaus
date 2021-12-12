import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import {
    Ambassador,
    Home,
    Firm,
    Passivhaus,
    Certification,
    Literature,
    Workshops,
} from './Layouts';
import { Navbar, Footer, Hero } from './components';
// Hero images and texts
import heroHomeImage from './images/heroImages/hero_home.png';
import heroFirmImage from './images/heroImages/hero_firma.png';
import heroPassivhausImage from './images/heroImages/hero_passivhaus.png';
import heroCertificationImage from './images/heroImages/hero_certification.png';
import heroWorkshopsImage from './images/heroImages/hero_workshops.png';
import heroLiteratureImage from './images/heroImages/hero_literature.png';
import heroAmbassadorImage from './images/heroImages/hero_ambassador.png';
import { heroText } from './heroContent';

import './App.scss';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <header>
                    <Route exact path="/">
                        <Hero text={heroText.homeText} backgroundImage={heroHomeImage} />
                    </Route>
                    <Route path="/firma">
                        <Hero
                            text={heroText.firmText}
                            backgroundImage={heroFirmImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/budynek-pasywny">
                        <Hero
                            text={heroText.passivhausText}
                            backgroundImage={heroPassivhausImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/certyfikacja">
                        <Hero
                            text={heroText.certificationText}
                            backgroundImage={heroCertificationImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/szkolenia">
                        <Hero
                            text={heroText.workshopsText}
                            backgroundImage={heroWorkshopsImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/literatura+narzedzia">
                        <Hero
                            text={heroText.literatureText}
                            backgroundImage={heroLiteratureImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/ambasador">
                        <Hero
                            text={heroText.ambassadorText}
                            backgroundImage={heroAmbassadorImage}
                            heroClass={'hero__subpage'}
                        />
                    </Route>

                    <Navbar />
                </header>

                <main>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/firma">
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
                </main>

                <footer>
                    <Footer />
                </footer>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
