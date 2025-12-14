import { AdaptiveSurvey } from './components/Survey/AdaptiveSurvey.jsx';


function App() {
    return (
        <div className="app">
            <main>
                <AdaptiveSurvey />
            </main>
            <footer className="app-footer">
                <p>© {new Date().getFullYear()} Adaptive Values Assessment</p>
            </footer>
        </div>
    );
}

export default App;
