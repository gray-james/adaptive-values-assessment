# Adaptive Values Assessment (AVA)

A client-side adaptive psychometric assessment built with React and Vite. This application measures 8 workplace value dimensions using a weighted-sum scoring model and an adaptive item selection algorithm.

## 🚀 Quick Start

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start development server:**
    ```bash
    npm run dev
    ```

3.  **Run engine tests:**
    ```bash
    npm test
    ```

## 🏗 Architecture Overview

Unlike traditional surveys that ask a fixed set of questions, AVA uses an **adaptive engine** to select the most informative question for the user based on their previous answers.

-   **Scoring Model**: Weighted Sum. Each item loads onto multiple dimensions (e.g., an item might measure both "Autonomy" and "Innovation").
-   **Selection Algorithm**: Maximum Uncertainty Reduction. The engine calculates which dimensions have the least "coverage" (information) and selects items that provide the most utility for those dimensions.
-   **Normalization**: Raw scores are normalized to a 0-100 scale based on the theoretical minimum and maximum possible scores for the *specific set of questions answered*.

## 📂 Project Structure

```
src/
├── components/          # React UI Components
│   ├── Survey/          # Survey interface (Questions, Progress)
│   ├── Results/         # Results dashboard (Radar Chart, Bars)
│   └── common/          # Shared UI elements
├── data/
│   └── itemBank.js      # The database of all 45 assessment items
├── engine/              # Core logic (Pure JavaScript, no React)
│   ├── constants.js     # Configuration (Dimensions, Likert Scale)
│   ├── itemSelector.js  # Adaptive selection algorithm
│   ├── scoringEngine.js # Raw score calculation
│   └── normalizer.js    # Score normalization (0-100)
├── hooks/               # React Hooks (State Management)
│   ├── useSurvey.js     # Manages survey flow and responses
│   └── useScoring.js    # Real-time score calculation
├── App.jsx              # Main entry point
└── test-engine.js       # Unit tests for the engine
```

## 🧠 Key Components Guide

### 1. The Engine (`src/engine/`)
This directory contains the business logic. It is framework-agnostic (pure JS).

-   **`constants.js`**: The source of truth. Defines the 8 dimensions (`DIMENSIONS`), the Likert scale values (`LIKERT_SCALE`), and survey rules (`SURVEY_CONFIG`). **Edit this to change dimension names or survey length.**
-   **`itemSelector.js`**: Decides which question to show next.
    -   `calculateCoverage()`: Sums the absolute loadings of answered items per dimension.
    -   `selectNextItem()`: Picks the item with the highest utility (need) for the current state.
-   **`scoringEngine.js`**: Calculates raw scores.
    -   `calculateRawScores()`: Sums `response * loading` for each dimension.
    -   `calculateAnsweredBounds()`: Determines the min/max possible score for the *answered* items to allow for accurate normalization even with partial completion.
-   **`normalizer.js`**: Converts raw scores to 0-100.

### 2. The Data (`src/data/`)
-   **`itemBank.js`**: Contains the `ITEM_BANK` array.
    -   Each item has an `id`, `text`, `reverseKeyed` flag, and `loadings` object.
    -   **Loadings**: A value between -1.0 and 1.0 indicating how strongly the item relates to each dimension.

### 3. State Management (`src/hooks/`)
-   **`useSurvey.js`**: The brain of the UI.
    -   Manages `responses` (map of itemId -> value).
    -   Manages `currentItem` (the question currently displayed).
    -   Handles the flow: `startSurvey` -> `submitResponse` -> `resetSurvey`.
-   **`useScoring.js`**: Reactive scoring.
    -   Watches `responses` and automatically recalculates scores using the engine.
    -   Returns `formattedResults` ready for the UI.

### 4. UI Components (`src/components/`)
-   **`Survey/AdaptiveSurvey.jsx`**: The main orchestrator. Switches between the Start Screen, Question Card, and Results Page based on `surveyStatus`.
-   **`Survey/QuestionCard.jsx`**: Renders a single question with the Likert scale.
-   **`Results/RadarChart.jsx`**: A D3.js visualization of the 8 dimensions.
    -   **Note**: If labels are cut off, adjust the `margin` prop or the `size` prop in `ResultsPage.jsx`.
-   **`Results/DimensionBar.jsx`**: Displays the linear score (0-100) for a single dimension with confidence intervals.

## 🛠 Configuration

You can tune the assessment behavior in `src/engine/constants.js`:

```javascript
export const SURVEY_CONFIG = {
  MIN_ITEMS: 15,          // Minimum questions before stopping
  MAX_ITEMS: 25,          // Hard limit on questions
  COVERAGE_THRESHOLD: 3.0 // Information density required to stop early
};
```

## 🧪 Testing

The engine logic is tested separately from the UI to ensure mathematical correctness.

Run the test suite:
```bash
node src/test-engine.js
```
Or via npm:
```bash
npm test
```

This verifies:
-   Item bank integrity (no missing loadings).
-   Scoring accuracy (positive vs negative loadings).
-   Normalization bounds.
-   Stopping rules.
