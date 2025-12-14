export const DIMENSIONS = {
  D1_autonomy: {
    id: 'D1_autonomy',
    name: 'Autonomy',
    lowLabel: 'Structure-Seeking',
    highLabel: 'Self-Directed',
    description: 'Preference for independence vs. guided direction'
  },
  D2_innovation: {
    id: 'D2_innovation',
    name: 'Innovation',
    lowLabel: 'Stability-Oriented',
    highLabel: 'Change-Driven',
    description: 'Comfort with novelty and risk vs. proven methods'
  },
  D3_collaboration: {
    id: 'D3_collaboration',
    name: 'Collaboration',
    lowLabel: 'Solo-Oriented',
    highLabel: 'Team-Oriented',
    description: 'Preference for individual vs. collective work'
  },
  D4_achievement: {
    id: 'D4_achievement',
    name: 'Achievement',
    lowLabel: 'Balance-Oriented',
    highLabel: 'Performance-Driven',
    description: 'Prioritization of career advancement vs. work-life balance'
  },
  D5_authority: {
    id: 'D5_authority',
    name: 'Authority',
    lowLabel: 'Egalitarian',
    highLabel: 'Hierarchical',
    description: 'Comfort with flat structures vs. clear chain of command'
  },
  D6_people_focus: {
    id: 'D6_people_focus',
    name: 'People Focus',
    lowLabel: 'Task-Oriented',
    highLabel: 'Relationship-Oriented',
    description: 'Focus on efficiency/results vs. harmony/relationships'
  },
  D7_intrinsic: {
    id: 'D7_intrinsic',
    name: 'Intrinsic Motivation',
    lowLabel: 'Extrinsic',
    highLabel: 'Intrinsic',
    description: 'Motivated by rewards/status vs. purpose/growth'
  },
  D8_adaptability: {
    id: 'D8_adaptability',
    name: 'Adaptability',
    lowLabel: 'Specialist',
    highLabel: 'Generalist',
    description: 'Preference for deep expertise vs. variety and flexibility'
  }
};

export const LIKERT_SCALE = {
  1: { value: 1, label: 'Strongly Disagree', normalized: -2 },
  2: { value: 2, label: 'Disagree', normalized: -1 },
  3: { value: 3, label: 'Neutral', normalized: 0 },
  4: { value: 4, label: 'Agree', normalized: 1 },
  5: { value: 5, label: 'Strongly Agree', normalized: 2 }
};

export const SURVEY_CONFIG = {
  MIN_ITEMS: 15,
  MAX_ITEMS: 25,
  COVERAGE_THRESHOLD: 3.0
};
