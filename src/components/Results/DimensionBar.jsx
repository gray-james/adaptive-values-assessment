import './DimensionBar.css';

export function DimensionBar({ result }) {
    const { name, score, confidence, lowLabel, highLabel, description } = result;

    return (
        <div className="dimension-bar">
            <div className="dimension-header">
                <span className="dimension-name">{name}</span>
                <span className="dimension-score">{score}/100</span>
            </div>

            <div className="dimension-scale-container">
                <div className="scale-labels">
                    <span className="scale-label low">{lowLabel}</span>
                    <span className="scale-label high">{highLabel}</span>
                </div>

                <div className="scale-track">
                    <div
                        className="scale-fill"
                        style={{ width: `${score}%` }}
                    />
                    <div
                        className="scale-marker"
                        style={{ left: `${score}%` }}
                    />
                </div>
            </div>

            <div className="dimension-footer">
                <p className="dimension-description">{description}</p>
                <div className="dimension-confidence" title="Based on number of relevant questions answered">
                    Confidence: <span className={`confidence-value ${confidence > 0.7 ? 'high' : 'low'}`}>
                        {Math.round(confidence * 100)}%
                    </span>
                </div>
            </div>
        </div>
    );
}
