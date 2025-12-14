import { SURVEY_CONFIG } from '../../engine/constants.js';
import './ProgressBar.css';

export function ProgressBar({ answeredCount }) {
    // Progress based on minimum items (shows "complete" at min, overflow beyond)
    const progressPercent = Math.min(100, (answeredCount / SURVEY_CONFIG.MIN_ITEMS) * 100);

    return (
        <div className="progress-container">
            <div className="progress-bar-track">
                <div
                    className="progress-fill"
                    style={{ width: `${progressPercent}%` }}
                />
            </div>
            <div className="progress-text">
                <span className="progress-count">{answeredCount}</span>
                <span className="progress-total"> / {SURVEY_CONFIG.MIN_ITEMS}+ questions</span>
            </div>
        </div>
    );
}
