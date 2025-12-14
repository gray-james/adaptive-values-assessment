import { useSurvey } from '../../hooks/useSurvey.js';
import { useScoring } from '../../hooks/useScoring.js';
import { QuestionCard } from './QuestionCard.jsx';
import { ProgressBar } from './ProgressBar.jsx';
import { ResultsPage } from '../Results/ResultsPage.jsx';
import './AdaptiveSurvey.css';

export function AdaptiveSurvey() {
    const {
        responses,
        currentItem,
        surveyStatus,
        answeredCount,
        startSurvey,
        submitResponse,
        resetSurvey,
        debugInfo
    } = useSurvey();

    const { formattedResults } = useScoring(responses);

    // Landing / Start screen
    if (surveyStatus === 'not_started') {
        return (
            <div className="survey-container start-screen">
                <div className="start-card">
                    <h1>Adaptive Values Assessment</h1>
                    <p className="intro-text">
                        This assessment measures your workplace values across 8 key dimensions.
                        The test adapts to your responses to provide a precise profile in fewer questions.
                    </p>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-icon">⏱️</span>
                            <span>5-10 Minutes</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">❓</span>
                            <span>15-25 Questions</span>
                        </div>
                        <div className="info-item">
                            <span className="info-icon">📊</span>
                            <span>Detailed Report</span>
                        </div>
                    </div>
                    <button onClick={startSurvey} className="start-button">
                        Begin Assessment
                    </button>
                </div>
            </div>
        );
    }

    // Results screen
    if (surveyStatus === 'completed') {
        return (
            <ResultsPage
                results={formattedResults}
                onRetake={resetSurvey}
            />
        );
    }

    // Active survey
    return (
        <div className="survey-container">
            <ProgressBar answeredCount={answeredCount} />

            {currentItem && (
                <QuestionCard
                    item={currentItem}
                    questionNumber={answeredCount + 1}
                    onSubmit={submitResponse}
                />
            )}

            {/* Debug panel - remove in production */}
            {import.meta.env.DEV && debugInfo && (
                <details className="debug-panel">
                    <summary>Debug Info</summary>
                    <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
                </details>
            )}
        </div>
    );
}
