import { useState } from 'react';
import { LIKERT_SCALE } from '../../engine/constants.js';
import './QuestionCard.css';

export function QuestionCard({ item, onSubmit, questionNumber }) {
    const [selectedValue, setSelectedValue] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        if (selectedValue === null) return;

        setIsSubmitting(true);
        onSubmit(item.id, selectedValue);

        // Reset for next question
        setTimeout(() => {
            setSelectedValue(null);
            setIsSubmitting(false);
        }, 100);
    };

    return (
        <div className="question-card">
            <div className="question-header">
                <span className="question-number">Question {questionNumber}</span>
            </div>

            <h2 className="question-text">{item.text}</h2>

            <div className="likert-scale" role="radiogroup" aria-label="Response options">
                {Object.values(LIKERT_SCALE).map(option => (
                    <label
                        key={option.value}
                        className={`likert-option ${selectedValue === option.value ? 'selected' : ''}`}
                    >
                        <input
                            type="radio"
                            name={`question-${item.id}`}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => setSelectedValue(option.value)}
                            disabled={isSubmitting}
                        />
                        <div className="likert-content">
                            <span className="likert-value">{option.value}</span>
                            <span className="likert-label">{option.label}</span>
                        </div>
                    </label>
                ))}
            </div>

            <div className="card-actions">
                <button
                    className="submit-button"
                    onClick={handleSubmit}
                    disabled={selectedValue === null || isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : 'Next'}
                </button>
            </div>
        </div>
    );
}
