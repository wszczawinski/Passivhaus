import './App.css';
import ErrorBoundary from './ErrorBoundary';

function App() {
    return (
        <ErrorBoundary>
            <div className="App">
                <header className="App-header"></header>
            </div>
        </ErrorBoundary>
    );
}

export default App;
