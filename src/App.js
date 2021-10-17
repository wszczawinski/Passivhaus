import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { Ambassador, Firm, Passivhaus, Certification, Literature, Workshops } from './Layouts';
import './App.scss';

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Firma</Link>
                            </li>
                            <li>
                                <Link to="/budynek-pasywny">Budynek pasywny</Link>
                            </li>
                            <li>
                                <Link to="/certyfikacja">Certyfikacja</Link>
                            </li>
                            <li>
                                <Link to="/szkolenia">Szkolenia</Link>
                            </li>
                            <li>
                                <Link to="/literatura+narzedzia">Literatura i narzędzia</Link>
                            </li>
                            <li>
                                <Link to="/ambasador">Ambasador Budownictwa Pasywnego</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
