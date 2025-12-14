import { useMemo } from 'react';
import { calculateRawScores, calculateAnsweredBounds } from '../engine/scoringEngine.js';
import { normalizeScores, calculateConfidence } from '../engine/normalizer.js';
import { ITEM_BANK } from '../data/itemBank.js';
import { DIMENSIONS } from '../engine/constants.js';

export function useScoring(responses) {
    const answeredItemIds = useMemo(() => Object.keys(responses), [responses]);

    const scores = useMemo(() => {
        if (answeredItemIds.length === 0) {
            // Return neutral scores
            const neutral = {};
            Object.keys(DIMENSIONS).forEach(dim => {
                neutral[dim] = 50;
            });
            return neutral;
        }

        const rawScores = calculateRawScores(responses);
        const bounds = calculateAnsweredBounds(answeredItemIds);
        return normalizeScores(rawScores, bounds);
    }, [responses, answeredItemIds]);

    const confidence = useMemo(() => {
        return calculateConfidence(answeredItemIds, ITEM_BANK);
    }, [answeredItemIds]);

    const formattedResults = useMemo(() => {
        return Object.entries(DIMENSIONS).map(([dimId, dimInfo]) => ({
            id: dimId,
            name: dimInfo.name,
            score: scores[dimId],
            confidence: confidence[dimId],
            lowLabel: dimInfo.lowLabel,
            highLabel: dimInfo.highLabel,
            description: dimInfo.description
        }));
    }, [scores, confidence]);

    return {
        scores,
        confidence,
        formattedResults,
        answeredCount: answeredItemIds.length
    };
}
