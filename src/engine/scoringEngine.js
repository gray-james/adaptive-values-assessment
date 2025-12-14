import { LIKERT_SCALE, DIMENSIONS } from './constants.js';
import { ITEM_BANK } from '../data/itemBank.js';

/**
 * Calculate raw scores for all dimensions based on responses
 * @param {Object} responses - Map of itemId -> response value (1-5)
 * @returns {Object} - Map of dimensionId -> raw score (unbounded)
 */
export function calculateRawScores(responses) {
    const scores = {};

    // Initialize all dimensions to 0
    Object.keys(DIMENSIONS).forEach(dim => {
        scores[dim] = 0;
    });

    // Accumulate weighted contributions
    Object.entries(responses).forEach(([itemId, responseValue]) => {
        const item = ITEM_BANK.find(i => i.id === itemId);
        if (!item) return;

        const normalizedResponse = LIKERT_SCALE[responseValue].normalized;

        Object.entries(item.loadings).forEach(([dim, loading]) => {
            scores[dim] += normalizedResponse * loading;
        });
    });

    return scores;
}

/**
 * Calculate maximum possible score magnitude for each dimension
 * Used for normalization
 * @returns {Object} - Map of dimensionId -> { min, max }
 */
export function calculateTheoreticalBounds() {
    const bounds = {};

    Object.keys(DIMENSIONS).forEach(dim => {
        let maxPositive = 0;
        let maxNegative = 0;

        ITEM_BANK.forEach(item => {
            const loading = item.loadings[dim];
            if (loading > 0) {
                maxPositive += loading * 2;  // Max response = +2
                maxNegative += loading * -2; // Min response = -2
            } else {
                maxPositive += loading * -2; // Negative loading, min response gives positive
                maxNegative += loading * 2;
            }
        });

        bounds[dim] = { min: maxNegative, max: maxPositive };
    });

    return bounds;
}

/**
 * Calculate "answered bounds" - the possible range given which items were answered
 * More accurate than theoretical bounds for partial completion
 */
export function calculateAnsweredBounds(answeredItemIds) {
    const bounds = {};
    const answeredItems = ITEM_BANK.filter(i => answeredItemIds.includes(i.id));

    Object.keys(DIMENSIONS).forEach(dim => {
        let maxPositive = 0;
        let maxNegative = 0;

        answeredItems.forEach(item => {
            const loading = item.loadings[dim];
            if (loading > 0) {
                maxPositive += loading * 2;
                maxNegative += loading * -2;
            } else {
                maxPositive += loading * -2;
                maxNegative += loading * 2;
            }
        });

        bounds[dim] = { min: maxNegative, max: maxPositive };
    });

    return bounds;
}
