import { useState, useCallback, useMemo } from 'react';
import { selectNextItem, shouldStop, getSelectionDebugInfo } from '../engine/itemSelector.js';
import { ITEM_BANK } from '../data/itemBank.js';

export function useSurvey() {
    const [responses, setResponses] = useState({}); // { itemId: responseValue }
    const [currentItem, setCurrentItem] = useState(null);
    const [surveyStatus, setSurveyStatus] = useState('not_started'); // not_started, in_progress, completed
    const [itemHistory, setItemHistory] = useState([]); // ordered list of shown items

    const answeredItemIds = useMemo(() => Object.keys(responses), [responses]);

    const startSurvey = useCallback(() => {
        setResponses({});
        setItemHistory([]);
        setSurveyStatus('in_progress');

        const firstItem = selectNextItem([]);
        setCurrentItem(firstItem);
        if (firstItem) {
            setItemHistory([firstItem.id]);
        } else {
            // Edge case: item bank empty or weird config
            setSurveyStatus('completed');
        }
    }, []);

    const submitResponse = useCallback((itemId, value) => {
        // Record response
        const newResponses = { ...responses, [itemId]: value };
        setResponses(newResponses);

        const newAnsweredIds = Object.keys(newResponses);

        // Check if should stop
        if (shouldStop(newAnsweredIds)) {
            setSurveyStatus('completed');
            setCurrentItem(null);
            return;
        }

        // Select next item
        const nextItem = selectNextItem(newAnsweredIds);

        if (nextItem) {
            setCurrentItem(nextItem);
            setItemHistory(prev => [...prev, nextItem.id]);
        } else {
            setSurveyStatus('completed');
            setCurrentItem(null);
        }
    }, [responses]);

    const resetSurvey = useCallback(() => {
        setResponses({});
        setCurrentItem(null);
        setSurveyStatus('not_started');
        setItemHistory([]);
    }, []);

    const debugInfo = useMemo(() => {
        if (surveyStatus !== 'in_progress') return null;
        return getSelectionDebugInfo(answeredItemIds);
    }, [answeredItemIds, surveyStatus]);

    return {
        // State
        responses,
        currentItem,
        surveyStatus,
        itemHistory,
        answeredCount: answeredItemIds.length,
        totalItems: ITEM_BANK.length,

        // Actions
        startSurvey,
        submitResponse,
        resetSurvey,

        // Debug (remove in production)
        debugInfo
    };
}
