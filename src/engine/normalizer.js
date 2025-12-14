import { DIMENSIONS } from './constants.js';

/**
 * Normalize raw scores to 0-100 scale
 * @param {Object} rawScores - Map of dimensionId -> raw score
 * @param {Object} bounds - Map of dimensionId -> { min, max }
 * @returns {Object} - Map of dimensionId -> normalized score (0-100)
 */
export function normalizeScores(rawScores, bounds) {
    const normalized = {};

    Object.keys(DIMENSIONS).forEach(dim => {
        const raw = rawScores[dim];
        const { min, max } = bounds[dim];

        // Handle edge case where min === max (no variance)
        if (max === min) {
            normalized[dim] = 50;
            return;
        }

        // Linear interpolation to 0-100
        const score = ((raw - min) / (max - min)) * 100;

        // Clamp to valid range
        normalized[dim] = Math.max(0, Math.min(100, Math.round(score)));
    });

    return normalized;
}

/**
 * Calculate confidence/reliability estimate per dimension
 * Based on coverage (sum of absolute loadings from answered items)
 * @param {string[]} answeredItemIds
 * @param {Object} itemBank
 * @returns {Object} - Map of dimensionId -> confidence (0-1)
 */
export function calculateConfidence(answeredItemIds, itemBank) {
    const coverage = {};
    const confidence = {};

    Object.keys(DIMENSIONS).forEach(dim => {
        coverage[dim] = 0;
    });

    answeredItemIds.forEach(itemId => {
        const item = itemBank.find(i => i.id === itemId);
        if (!item) return;

        Object.entries(item.loadings).forEach(([dim, loading]) => {
            coverage[dim] += Math.abs(loading);
        });
    });

    // Convert coverage to confidence (asymptotic toward 1)
    // confidence = 1 - e^(-coverage/3)
    Object.keys(DIMENSIONS).forEach(dim => {
        confidence[dim] = 1 - Math.exp(-coverage[dim] / 3);
    });

    return confidence;
}
