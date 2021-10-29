import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Ambassador, Firm, Passivhaus, Certification, Literature, Workshops } from './Layouts';
import { Navbar, Footer, Hero } from './components';
import { importImages } from './scripts';
import * as heroContent from './heroContent.json';

import './App.scss';

function App() {
    const images = importImages(
        require.context('./images/heroImages/', false, /\.(png|jpe?g|svg)$/),
    );

    return (
        <ErrorBoundary>
            <Router>
                <header>
                    <Route exact path="/">
                        <Hero
                            text={heroContent.firmHeroText}
                            backgroundImage={images[`hero_firma.png`].default}
                        />
                    </Route>
                    <Route path="/budynek-pasywny">
                        <Hero
                            text={heroContent.passivhausHeroText}
                            backgroundImage={images[`hero_passivhaus.png`].default}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/certyfikacja">
                        <Hero
                            text={heroContent.certificationHeroText}
                            backgroundImage={images[`hero_certification.png`].default}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/szkolenia">
                        <Hero
                            text={heroContent.workshopsHeroText}
                            backgroundImage={images[`hero_workshops.png`].default}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/literatura+narzedzia">
                        <Hero
                            text={heroContent.literatureHeroText}
                            backgroundImage={images[`hero_firma.png`].default}
                            heroClass={'hero__subpage'}
                        />
                    </Route>
                    <Route path="/ambasador">
                        <Hero
                            text={heroContent.ambassadorHeroText}
                            backgroundImage={images[`hero_firma.png`].default}
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
