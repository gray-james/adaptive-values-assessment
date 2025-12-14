import { DIMENSIONS, SURVEY_CONFIG } from './constants.js';
import { ITEM_BANK } from '../data/itemBank.js';

/**
 * Calculate coverage per dimension from answered items
 * Coverage = sum of |loadings| for answered items
 */
export function calculateCoverage(answeredItemIds) {
    const coverage = {};

    Object.keys(DIMENSIONS).forEach(dim => {
        coverage[dim] = 0;
    });

    answeredItemIds.forEach(itemId => {
        const item = ITEM_BANK.find(i => i.id === itemId);
        if (!item) return;

        Object.entries(item.loadings).forEach(([dim, loading]) => {
            coverage[dim] += Math.abs(loading);
        });
    });

    return coverage;
}

/**
 * Calculate "need" per dimension (inverse of coverage)
 * Higher need = dimension needs more items
 */
export function calculateNeed(coverage) {
    const need = {};

    Object.keys(DIMENSIONS).forEach(dim => {
        need[dim] = 1 / (coverage[dim] + 0.5); // +0.5 to avoid division by zero and smooth curve
    });

    return need;
}

/**
 * Calculate utility of an item given current needs
 * Utility = sum of |loading| × need across all dimensions
 */
export function calculateItemUtility(item, need) {
    let utility = 0;

    Object.entries(item.loadings).forEach(([dim, loading]) => {
        utility += Math.abs(loading) * need[dim];
    });

    return utility;
}

/**
 * Select the next best item to administer
 * @param {string[]} answeredItemIds - Items already answered
 * @returns {Object|null} - Next item to show, or null if stopping criteria met
 */
export function selectNextItem(answeredItemIds) {
    // Check stopping criteria first
    if (shouldStop(answeredItemIds)) {
        return null;
    }

    const coverage = calculateCoverage(answeredItemIds);
    const need = calculateNeed(coverage);

    // Get unanswered items
    const remainingItems = ITEM_BANK.filter(item => !answeredItemIds.includes(item.id));

    if (remainingItems.length === 0) {
        return null;
    }

    // Calculate utility for each remaining item
    const itemsWithUtility = remainingItems.map(item => ({
        item,
        utility: calculateItemUtility(item, need)
    }));

    // Sort by utility descending
    itemsWithUtility.sort((a, b) => b.utility - a.utility);

    // Add small random factor to top items to reduce predictability
    const topItems = itemsWithUtility.slice(0, 3);
    const selectedIndex = Math.floor(Math.random() * Math.min(3, topItems.length));

    return topItems[selectedIndex].item;
}

/**
 * Determine if test should stop
 */
export function shouldStop(answeredItemIds) {
    const numAnswered = answeredItemIds.length;

    // Hard maximum
    if (numAnswered >= SURVEY_CONFIG.MAX_ITEMS) {
        return true;
    }

    // Below minimum, never stop
    if (numAnswered < SURVEY_CONFIG.MIN_ITEMS) {
        return false;
    }

    // Check if all dimensions have sufficient coverage
    const coverage = calculateCoverage(answeredItemIds);
    const allCovered = Object.values(coverage).every(
        cov => cov >= SURVEY_CONFIG.COVERAGE_THRESHOLD
    );

    return allCovered;
}

/**
 * Get debug info for current state (useful for development)
 */
export function getSelectionDebugInfo(answeredItemIds) {
    const coverage = calculateCoverage(answeredItemIds);
    const need = calculateNeed(coverage);

    const remainingItems = ITEM_BANK.filter(item => !answeredItemIds.includes(item.id));
    const topItems = remainingItems
        .map(item => ({
            id: item.id,
            text: item.text.substring(0, 40) + '...',
            utility: calculateItemUtility(item, need)
        }))
        .sort((a, b) => b.utility - a.utility)
        .slice(0, 5);

    return {
        numAnswered: answeredItemIds.length,
        coverage,
        need,
        topCandidates: topItems,
        shouldStop: shouldStop(answeredItemIds)
    };
}
