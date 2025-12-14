import { RadarChart } from './RadarChart.jsx';
import { DimensionBar } from './DimensionBar.jsx';
import './ResultsPage.css';

export function ResultsPage({ results, onRetake }) {
    return (
        <div className="results-container">
            <header className="results-header">
                <h1>Your Values Profile</h1>
                <p className="results-subtitle">
                    Based on your responses, here is a breakdown of your workplace value preferences.
                </p>
            </header>

            <section className="radar-section">
                <RadarChart results={results} size={600} />
            </section>

            <section className="dimensions-section">
                <h2>Dimension Breakdown</h2>
                <div className="dimensions-grid">
                    {results.map(result => (
                        <DimensionBar key={result.id} result={result} />
                    ))}
                </div>
            </section>

            <div className="results-actions">
                <button onClick={onRetake} className="retake-button">
                    Retake Assessment
                </button>
            </div>
        </div>
    );
}
