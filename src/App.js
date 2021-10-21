import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Ambassador, Firm, Passivhaus, Certification, Literature, Workshops } from './Layouts';
import { Navbar, Announcements, Footer, Hero } from './components';
import './App.scss';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <header>
                    <Hero />
                    <Navbar />
                </header>

                <main>
                    <Announcements />

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
