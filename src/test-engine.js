import { calculateRawScores, calculateTheoreticalBounds, calculateAnsweredBounds } from './engine/scoringEngine.js';
import { normalizeScores, calculateConfidence } from './engine/normalizer.js';
import { selectNextItem, shouldStop, calculateCoverage } from './engine/itemSelector.js';
import { ITEM_BANK, validateItemBank } from './data/itemBank.js';
import { SURVEY_CONFIG, DIMENSIONS } from './engine/constants.js';

// Simple test runner
function runTests() {
    console.log('Running Engine Tests...\n');
    let passed = 0;
    let failed = 0;

    function assert(condition, message) {
        if (condition) {
            console.log(`✅ ${message}`);
            passed++;
        } else {
            console.error(`❌ ${message}`);
            failed++;
        }
    }

    // 1. Validate Item Bank
    console.log('--- Item Bank Validation ---');
    const errors = validateItemBank();
    assert(errors.length === 0, `Item bank validation (${errors.length} errors)`);
    if (errors.length > 0) console.error(errors);

    // 2. Scoring Engine
    console.log('\n--- Scoring Engine ---');
    const emptyResponses = {};
    const emptyScores = calculateRawScores(emptyResponses);
    assert(Object.values(emptyScores).every(s => s === 0), 'Empty responses yield 0 scores');

    // Test single item response
    // AVA001: D1=0.8, D3=-0.6. Response 5 (Strongly Agree) -> normalized 2
    // Expected: D1 = 1.6, D3 = -1.2
    const singleResponse = { 'AVA001': 5 };
    const singleScores = calculateRawScores(singleResponse);
    assert(Math.abs(singleScores.D1_autonomy - 1.6) < 0.001, 'Single item positive loading correct');
    assert(Math.abs(singleScores.D3_collaboration - (-1.2)) < 0.001, 'Single item negative loading correct');

    // 3. Normalization
    console.log('\n--- Normalization ---');
    const bounds = calculateAnsweredBounds(['AVA001']);
    // AVA001 D1 loading 0.8. Max possible = 0.8*2 = 1.6. Min = 0.8*-2 = -1.6
    assert(bounds.D1_autonomy.max === 1.6, 'Bounds max calculation correct');
    assert(bounds.D1_autonomy.min === -1.6, 'Bounds min calculation correct');

    const normalized = normalizeScores(singleScores, bounds);
    // Raw 1.6, Range [-1.6, 1.6]. Normalized should be 100
    assert(normalized.D1_autonomy === 100, 'Normalization max value correct');

    // Test neutral response
    const neutralResponse = { 'AVA001': 3 }; // normalized 0
    const neutralScores = calculateRawScores(neutralResponse); // 0
    const neutralNormalized = normalizeScores(neutralScores, bounds);
    // Raw 0, Range [-1.6, 1.6]. Normalized should be 50
    assert(neutralNormalized.D1_autonomy === 50, 'Normalization neutral value correct');

    // 4. Item Selection
    console.log('\n--- Item Selection ---');
    const firstItem = selectNextItem([]);
    assert(firstItem !== null, 'Selects first item');
    assert(ITEM_BANK.some(i => i.id === firstItem.id), 'Selected item exists in bank');

    // Test stopping rule
    const allItems = ITEM_BANK.map(i => i.id);
    assert(shouldStop(allItems), 'Stops when all items answered');

    const fewItems = ['AVA001', 'AVA002'];
    assert(!shouldStop(fewItems), 'Does not stop below min items');

    // 5. Confidence
    console.log('\n--- Confidence ---');
    const confidence = calculateConfidence(['AVA001'], ITEM_BANK);
    // Coverage D1 = 0.8. Confidence = 1 - e^(-0.8/3) ≈ 0.23
    assert(confidence.D1_autonomy > 0.2 && confidence.D1_autonomy < 0.3, 'Confidence calculation reasonable');

    console.log(`\nTests Completed: ${passed} Passed, ${failed} Failed`);
    if (failed > 0) process.exit(1);
}

runTests();
