export const ITEM_BANK = [
    // ============================================
    // Autonomy (D1) Primary Items
    // ============================================
    {
        id: 'AVA001',
        text: 'I prefer to figure out solutions on my own before asking for help.',
        loadings: {
            D1_autonomy: 0.8,
            D2_innovation: 0.2,
            D3_collaboration: -0.6,
            D4_achievement: 0.3,
            D5_authority: -0.3,
            D6_people_focus: -0.2,
            D7_intrinsic: 0.1,
            D8_adaptability: 0.0
        }
    },
    {
        id: 'AVA002',
        text: 'I work best when I have a clear set of instructions to follow.',
        // REVISED: Removed "am given" - less passive, more about preference
        loadings: {
            D1_autonomy: -0.8,
            D2_innovation: -0.4,
            D3_collaboration: 0.3,
            D4_achievement: -0.1,
            D5_authority: 0.5,
            D6_people_focus: 0.0,
            D7_intrinsic: -0.1,
            D8_adaptability: -0.3
        }
    },
    {
        id: 'AVA003',
        text: 'I enjoy having the freedom to decide how I approach my daily tasks.',
        loadings: {
            D1_autonomy: 0.7,
            D2_innovation: 0.3,
            D3_collaboration: -0.2,
            D4_achievement: 0.2,
            D5_authority: -0.4,
            D6_people_focus: 0.1,
            D7_intrinsic: 0.4,
            D8_adaptability: 0.2
        }
    },
    {
        id: 'AVA004',
        text: 'I appreciate when my manager regularly checks in on my progress.',
        // REVISED: "closely oversees" → "regularly checks in" - removes micromanagement connotation
        loadings: {
            D1_autonomy: -0.7,
            D2_innovation: -0.3,
            D3_collaboration: 0.4,
            D4_achievement: 0.0,
            D5_authority: 0.6,
            D6_people_focus: 0.2,
            D7_intrinsic: -0.2,
            D8_adaptability: -0.2
        }
    },
    {
        id: 'AVA005',
        text: 'I tend to start working on new ideas before getting formal approval.',
        // REVISED: "take initiative" sounds heroic; more neutral phrasing
        loadings: {
            D1_autonomy: 0.8,
            D2_innovation: 0.6,
            D3_collaboration: -0.3,
            D4_achievement: 0.5,
            D5_authority: -0.5,
            D6_people_focus: -0.1,
            D7_intrinsic: 0.3,
            D8_adaptability: 0.4
        }
    },
    {
        id: 'AVA006',
        text: 'I prefer roles where my responsibilities are clearly defined.',
        // REVISED: "strictly" → "clearly" - less rigid connotation
        loadings: {
            D1_autonomy: -0.6,
            D2_innovation: -0.5,
            D3_collaboration: 0.2,
            D4_achievement: -0.2,
            D5_authority: 0.4,
            D6_people_focus: 0.0,
            D7_intrinsic: -0.3,
            D8_adaptability: -0.6
        }
    },

    // ============================================
    // Innovation (D2) Primary Items
    // ============================================
    {
        id: 'AVA007',
        text: 'I find it energizing to experiment with new and untested methods.',
        // REVISED: "excited by the opportunity" → "find it energizing" - less socially loaded
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.9,
            D3_collaboration: 0.1,
            D4_achievement: 0.2,
            D5_authority: -0.2,
            D6_people_focus: 0.0,
            D7_intrinsic: 0.2,
            D8_adaptability: 0.5
        }
    },
    {
        id: 'AVA008',
        text: 'I prefer using established processes that have a track record of success.',
        // REVISED: "known to work well" → "track record of success" - more professional
        loadings: {
            D1_autonomy: -0.2,
            D2_innovation: -0.8,
            D3_collaboration: 0.2,
            D4_achievement: 0.0,
            D5_authority: 0.3,
            D6_people_focus: 0.1,
            D7_intrinsic: -0.1,
            D8_adaptability: -0.4
        }
    },
    {
        id: 'AVA009',
        text: 'I often propose changes to existing ways of doing things.',
        // REVISED: "suggest changes to improve" → "propose changes to existing" - removes assumption that changes are improvements
        loadings: {
            D1_autonomy: 0.4,
            D2_innovation: 0.8,
            D3_collaboration: 0.2,
            D4_achievement: 0.4,
            D5_authority: -0.3,
            D6_people_focus: 0.1,
            D7_intrinsic: 0.2,
            D8_adaptability: 0.3
        }
    },
    {
        id: 'AVA010',
        text: 'I find frequent procedural changes disruptive to my workflow.',
        // REVISED: Removed "and unnecessary" - removes value judgment
        loadings: {
            D1_autonomy: -0.1,
            D2_innovation: -0.7,
            D3_collaboration: 0.0,
            D4_achievement: -0.1,
            D5_authority: 0.2,
            D6_people_focus: 0.0,
            D7_intrinsic: -0.2,
            D8_adaptability: -0.6
        }
    },
    {
        id: 'AVA011',
        text: 'I am comfortable taking calculated risks in pursuit of better outcomes.',
        // REVISED: Added "calculated" - makes risk-taking sound more professional, less reckless
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.8,
            D3_collaboration: 0.0,
            D4_achievement: 0.5,
            D5_authority: -0.1,
            D6_people_focus: -0.1,
            D7_intrinsic: 0.1,
            D8_adaptability: 0.4
        }
    },

    // ============================================
    // Collaboration (D3) Primary Items
    // ============================================
    {
        id: 'AVA012',
        text: 'I prefer making decisions as a group rather than individually.',
        // REVISED: "best results come from working together" → neutral preference statement
        loadings: {
            D1_autonomy: -0.4,
            D2_innovation: 0.2,
            D3_collaboration: 0.9,
            D4_achievement: 0.1,
            D5_authority: -0.1,
            D6_people_focus: 0.5,
            D7_intrinsic: 0.2,
            D8_adaptability: 0.1
        }
    },
    {
        id: 'AVA013',
        text: 'I produce my best work when I can focus alone without interruptions.',
        // REVISED: "most productive" → "best work" - slight softening
        loadings: {
            D1_autonomy: 0.6,
            D2_innovation: 0.0,
            D3_collaboration: -0.8,
            D4_achievement: 0.2,
            D5_authority: -0.1,
            D6_people_focus: -0.4,
            D7_intrinsic: 0.0,
            D8_adaptability: -0.1
        }
    },
    {
        id: 'AVA014',
        text: 'I find brainstorming sessions where everyone contributes to be valuable.',
        // REVISED: "enjoy" → "find valuable" - less about emotion, more about utility
        loadings: {
            D1_autonomy: -0.2,
            D2_innovation: 0.4,
            D3_collaboration: 0.8,
            D4_achievement: 0.1,
            D5_authority: -0.2,
            D6_people_focus: 0.4,
            D7_intrinsic: 0.3,
            D8_adaptability: 0.2
        }
    },
    {
        id: 'AVA015',
        text: 'I prefer to own my deliverables individually rather than share accountability.',
        // REVISED: More specific about what individual responsibility means
        loadings: {
            D1_autonomy: 0.5,
            D2_innovation: 0.1,
            D3_collaboration: -0.7,
            D4_achievement: 0.4,
            D5_authority: 0.0,
            D6_people_focus: -0.3,
            D7_intrinsic: 0.1,
            D8_adaptability: 0.0
        }
    },
    {
        id: 'AVA016',
        text: 'I seek input from colleagues before finalizing my decisions.',
        // REVISED: "actively seek" → "seek" - less intense
        loadings: {
            D1_autonomy: -0.3,
            D2_innovation: 0.1,
            D3_collaboration: 0.8,
            D4_achievement: 0.0,
            D5_authority: -0.1,
            D6_people_focus: 0.4,
            D7_intrinsic: 0.1,
            D8_adaptability: 0.2
        }
    },

    // ============================================
    // Achievement (D4) Primary Items
    // ============================================
    {
        id: 'AVA017',
        text: 'Career advancement is an important motivator for me.',
        // REVISED: "highly motivated by the prospect of" → simpler, less intense
        loadings: {
            D1_autonomy: 0.2,
            D2_innovation: 0.2,
            D3_collaboration: -0.1,
            D4_achievement: 0.9,
            D5_authority: 0.3,
            D6_people_focus: -0.2,
            D7_intrinsic: -0.2,  // REVISED: -0.4 → -0.2 (advancement can be intrinsic)
            D8_adaptability: 0.1
        }
    },
    {
        id: 'AVA018',
        text: 'I prioritize work-life balance over career advancement opportunities.',
        // REVISED: "getting ahead" → "career advancement opportunities" - more neutral framing
        loadings: {
            D1_autonomy: -0.1,
            D2_innovation: -0.2,
            D3_collaboration: 0.1,
            D4_achievement: -0.8,
            D5_authority: -0.2,
            D6_people_focus: 0.3,
            D7_intrinsic: 0.2,
            D8_adaptability: -0.1
        }
    },
    {
        id: 'AVA019',
        text: 'I regularly set goals that stretch beyond what is expected of me.',
        // REVISED: Split "set ambitious goals AND work hard" - now single concept
        loadings: {
            D1_autonomy: 0.4,
            D2_innovation: 0.3,
            D3_collaboration: -0.1,
            D4_achievement: 0.8,
            D5_authority: 0.0,
            D6_people_focus: -0.1,
            D7_intrinsic: 0.1,
            D8_adaptability: 0.2
        }
    },
    {
        id: 'AVA020',
        text: 'Advancing to a more senior position is not a priority for me.',
        // REVISED: Split double-barrel, focused on single concept
        loadings: {
            D1_autonomy: -0.2,
            D2_innovation: -0.3,
            D3_collaboration: 0.1,
            D4_achievement: -0.8,
            D5_authority: -0.1,
            D6_people_focus: 0.2,
            D7_intrinsic: 0.3,
            D8_adaptability: -0.2
        }
    },
    {
        id: 'AVA021',
        text: 'I find competitive environments motivating.',
        // REVISED: "enjoy the challenge of competing to be the best" → simpler, less braggy
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.2,
            D3_collaboration: -0.4,
            D4_achievement: 0.8,
            D5_authority: 0.1,
            D6_people_focus: -0.3,
            D7_intrinsic: -0.3,
            D8_adaptability: 0.1
        }
    },

    // ============================================
    // Authority (D5) Primary Items
    // ============================================
    {
        id: 'AVA022',
        text: 'I believe organizational hierarchy should generally be followed.',
        // REVISED: Split double-barrel "respect AND believe" → single concept
        loadings: {
            D1_autonomy: -0.4,
            D2_innovation: -0.3,
            D3_collaboration: 0.0,
            D4_achievement: 0.2,
            D5_authority: 0.9,
            D6_people_focus: -0.1,
            D7_intrinsic: -0.1,
            D8_adaptability: -0.2
        }
    },
    {
        id: 'AVA023',
        text: 'I prefer organizations with flat structures where status differences are minimal.',
        // REVISED: "everyone is equal" → more realistic phrasing
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.3,
            D3_collaboration: 0.4,
            D4_achievement: -0.1,
            D5_authority: -0.8,
            D6_people_focus: 0.3,
            D7_intrinsic: 0.2,
            D8_adaptability: 0.1
        }
    },
    {
        id: 'AVA024',
        text: 'I feel more comfortable in organizations with clear leadership structures.',
        // REVISED: "secure" → "comfortable", "hierarchy" → "leadership structures"
        loadings: {
            D1_autonomy: -0.5,
            D2_innovation: -0.2,
            D3_collaboration: 0.1,
            D4_achievement: 0.1,
            D5_authority: 0.8,
            D6_people_focus: 0.0,
            D7_intrinsic: -0.1,
            D8_adaptability: -0.3
        }
    },
    {
        id: 'AVA025',
        text: 'I am comfortable raising concerns about decisions made by senior leaders.',
        // REVISED: "questioning" → "raising concerns about" - more professional
        loadings: {
            D1_autonomy: 0.5,
            D2_innovation: 0.4,
            D3_collaboration: 0.1,
            D4_achievement: 0.2,
            D5_authority: -0.7,
            D6_people_focus: 0.0,
            D7_intrinsic: 0.2,
            D8_adaptability: 0.2
        }
    },
    {
        id: 'AVA026',
        text: 'I think leaders should have final authority on important decisions.',
        // REVISED: "all major decisions" → "important decisions" - softened absolute
        loadings: {
            D1_autonomy: -0.4,
            D2_innovation: -0.2,
            D3_collaboration: -0.1,
            D4_achievement: 0.2,
            D5_authority: 0.8,
            D6_people_focus: -0.1,
            D7_intrinsic: -0.1,
            D8_adaptability: -0.1
        }
    },

    // ============================================
    // People Focus (D6) Primary Items
    // ============================================
    {
        id: 'AVA027',
        text: 'I invest time in building relationships with my colleagues.',
        // REVISED: "prioritize maintaining good relationships" → behavioral framing
        loadings: {
            D1_autonomy: -0.1,
            D2_innovation: 0.0,
            D3_collaboration: 0.5,
            D4_achievement: -0.2,
            D5_authority: -0.1,
            D6_people_focus: 0.9,
            D7_intrinsic: 0.3,
            D8_adaptability: 0.1
        }
    },
    {
        id: 'AVA028',
        text: 'I focus on delivering results efficiently, even if it means fewer social interactions.',
        // REVISED: "upsets others" → "fewer social interactions" - less harsh, both options valid
        loadings: {
            D1_autonomy: 0.2,
            D2_innovation: 0.1,
            D3_collaboration: -0.4,
            D4_achievement: 0.5,
            D5_authority: 0.1,
            D6_people_focus: -0.8,
            D7_intrinsic: -0.2,
            D8_adaptability: 0.0
        }
    },
    {
        id: 'AVA029',
        text: 'I go out of my way to make sure quieter colleagues have a chance to contribute.',
        // REVISED: "everyone feels included and valued" → specific behavior, less abstract virtue
        loadings: {
            D1_autonomy: -0.2,
            D2_innovation: 0.1,
            D3_collaboration: 0.6,
            D4_achievement: -0.1,
            D5_authority: -0.2,
            D6_people_focus: 0.8,
            D7_intrinsic: 0.4,
            D8_adaptability: 0.2
        }
    },
    {
        id: 'AVA030',
        text: 'I prioritize task completion over team morale considerations.',
        // REVISED: "results matter more than feelings" → more professional framing
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.2,
            D3_collaboration: -0.3,
            D4_achievement: 0.6,
            D5_authority: 0.2,
            D6_people_focus: -0.8,
            D7_intrinsic: -0.3,
            D8_adaptability: 0.1
        }
    },
    {
        id: 'AVA031',
        text: 'I adjust my communication style based on how colleagues seem to be feeling.',
        // REVISED: "sensitive to emotional needs" → specific behavior, less virtue-signaling
        loadings: {
            D1_autonomy: -0.1,
            D2_innovation: 0.0,
            D3_collaboration: 0.4,
            D4_achievement: -0.2,
            D5_authority: -0.1,
            D6_people_focus: 0.8,
            D7_intrinsic: 0.3,
            D8_adaptability: 0.3  // REVISED: 0.2 → 0.3 (adjusting style is adaptability)
        }
    },

    // ============================================
    // Intrinsic Motivation (D7) Primary Items
    // ============================================
    {
        id: 'AVA032',
        text: 'Finding personal meaning in my work is important to me.',
        // REVISED: "motivated by work I find personally meaningful" → clearer preference statement
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.2,
            D3_collaboration: 0.1,
            D4_achievement: -0.1,
            D5_authority: -0.2,
            D6_people_focus: 0.3,
            D7_intrinsic: 0.9,
            D8_adaptability: 0.1
        }
    },
    {
        id: 'AVA033',
        text: 'Compensation and benefits are major factors in my job satisfaction.',
        // REVISED: "work primarily for" → "major factors" - less absolute, more honest
        loadings: {
            D1_autonomy: -0.1,
            D2_innovation: -0.2,
            D3_collaboration: -0.1,
            D4_achievement: 0.5,
            D5_authority: 0.2,
            D6_people_focus: -0.2,
            D7_intrinsic: -0.8,
            D8_adaptability: -0.1
        }
    },
    {
        id: 'AVA034',
        text: 'I would choose a role with more learning opportunities over one with higher pay.',
        // REVISED: Forces trade-off rather than stating universal positive
        loadings: {
            D1_autonomy: 0.4,
            D2_innovation: 0.4,
            D3_collaboration: 0.1,
            D4_achievement: 0.1,  // REVISED: 0.3 → 0.1 (trade-off diminishes achievement link)
            D5_authority: -0.1,
            D6_people_focus: 0.1,
            D7_intrinsic: 0.8,
            D8_adaptability: 0.3
        }
    },
    {
        id: 'AVA035',
        text: 'Job titles and visible recognition are meaningful motivators for me.',
        // REVISED: "most concerned with" → "meaningful motivators" - easier to admit
        loadings: {
            D1_autonomy: 0.1,
            D2_innovation: 0.0,
            D3_collaboration: -0.2,
            D4_achievement: 0.7,
            D5_authority: 0.3,
            D6_people_focus: -0.3,
            D7_intrinsic: -0.7,
            D8_adaptability: 0.0
        }
    },
    {
        id: 'AVA036',
        text: 'Contributing to a larger purpose matters more to me than maximizing my income.',
        // REVISED: Forces trade-off; "positive difference in world" → more specific trade-off
        loadings: {
            D1_autonomy: 0.2,
            D2_innovation: 0.3,
            D3_collaboration: 0.3,
            D4_achievement: -0.2,  // REVISED: -0.1 → -0.2 (trade-off with income = less achievement focus)
            D5_authority: -0.2,
            D6_people_focus: 0.5,
            D7_intrinsic: 0.9,
            D8_adaptability: 0.2
        }
    },

    // ============================================
    // Adaptability (D8) Primary Items
    // ============================================
    {
        id: 'AVA037',
        text: 'I enjoy working on a variety of different tasks each day.',
        loadings: {
            D1_autonomy: 0.2,
            D2_innovation: 0.4,
            D3_collaboration: 0.1,
            D4_achievement: 0.1,
            D5_authority: -0.1,
            D6_people_focus: 0.0,
            D7_intrinsic: 0.2,
            D8_adaptability: 0.9
        }
    },
    {
        id: 'AVA038',
        text: 'I prefer to develop deep expertise in one area rather than broad knowledge across many.',
        // REVISED: Added "rather than" to make trade-off explicit
        loadings: {
            D1_autonomy: -0.1,
            D2_innovation: -0.3,
            D3_collaboration: -0.1,
            D4_achievement: 0.3,
            D5_authority: 0.1,
            D6_people_focus: -0.1,
            D7_intrinsic: 0.0,  // REVISED: 0.1 → 0.0 (specialization is neutral on intrinsic)
            D8_adaptability: -0.8
        }
    },
    {
        id: 'AVA039',
        text: 'I find it easy to shift focus when priorities change.',
        // REVISED: "adapt quickly" → "find it easy to shift" - less self-congratulatory
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.5,
            D3_collaboration: 0.2,
            D4_achievement: 0.2,
            D5_authority: -0.1,
            D6_people_focus: 0.1,
            D7_intrinsic: 0.1,
            D8_adaptability: 0.8
        }
    },
    {
        id: 'AVA040',
        text: 'I find it challenging to switch between unrelated projects in the same day.',
        // REVISED: "difficult" → "challenging" - less negative connotation
        loadings: {
            D1_autonomy: -0.2,
            D2_innovation: -0.4,
            D3_collaboration: -0.1,
            D4_achievement: 0.0,
            D5_authority: 0.2,
            D6_people_focus: 0.0,
            D7_intrinsic: -0.1,
            D8_adaptability: -0.7
        }
    },
    {
        id: 'AVA041',
        text: 'I handle juggling multiple responsibilities well.',
        // REVISED: "comfortable handling" → "handle well" - simpler
        loadings: {
            D1_autonomy: 0.4,
            D2_innovation: 0.3,
            D3_collaboration: 0.1,
            D4_achievement: 0.3,
            D5_authority: -0.1,
            D6_people_focus: 0.0,
            D7_intrinsic: 0.1,
            D8_adaptability: 0.8
        }
    },

    // ============================================
    // Mixed / Complex Items
    // ============================================
    {
        id: 'AVA042',
        text: 'I challenge established practices even when it creates friction with colleagues.',
        // REVISED: "willing to challenge status quo to achieve better results" → includes cost/trade-off
        loadings: {
            D1_autonomy: 0.5,
            D2_innovation: 0.7,
            D3_collaboration: -0.3,  // REVISED: -0.2 → -0.3 (friction with colleagues = less collaboration)
            D4_achievement: 0.5,     // REVISED: 0.6 → 0.5
            D5_authority: -0.4,
            D6_people_focus: -0.3,   // REVISED: -0.2 → -0.3 (friction = less people focus)
            D7_intrinsic: 0.2,
            D8_adaptability: 0.3
        }
    },
    {
        id: 'AVA043',
        text: 'I prefer a predictable work environment where expectations are consistent.',
        // REVISED: "stable where I know exactly what to expect" → slightly softer
        loadings: {
            D1_autonomy: -0.3,
            D2_innovation: -0.8,
            D3_collaboration: 0.1,
            D4_achievement: -0.2,
            D5_authority: 0.4,
            D6_people_focus: 0.1,
            D7_intrinsic: -0.1,
            D8_adaptability: -0.6
        }
    },
    {
        id: 'AVA044',
        text: 'I focus more on my own deliverables than on team dynamics.',
        // REVISED: "individual success more important than group harmony" → behavioral, less value-laden
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.1,
            D3_collaboration: -0.7,
            D4_achievement: 0.5,     // REVISED: 0.6 → 0.5
            D5_authority: 0.1,
            D6_people_focus: -0.7,   // REVISED: -0.8 → -0.7
            D7_intrinsic: -0.2,      // REVISED: -0.3 → -0.2
            D8_adaptability: 0.0
        }
    },
    {
        id: 'AVA045',
        text: 'Internal satisfaction matters more to me than external recognition.',
        // REVISED: "driven by sense of purpose rather than external recognition" → clearer trade-off
        loadings: {
            D1_autonomy: 0.2,
            D2_innovation: 0.2,
            D3_collaboration: 0.1,
            D4_achievement: -0.3,
            D5_authority: -0.2,
            D6_people_focus: 0.3,
            D7_intrinsic: 0.9,
            D8_adaptability: 0.1
        }
    },

    // ============================================
    // NEW: Additional D7_intrinsic Items (Coverage Gap)
    // ============================================
    {
        id: 'AVA046',
        text: 'I would stay in a lower-paying role if I found the work genuinely interesting.',
        // NEW: Forces clear intrinsic vs. extrinsic trade-off
        loadings: {
            D1_autonomy: 0.2,
            D2_innovation: 0.3,
            D3_collaboration: 0.0,
            D4_achievement: -0.4,
            D5_authority: -0.1,
            D6_people_focus: 0.1,
            D7_intrinsic: 0.8,
            D8_adaptability: 0.1
        }
    },
    {
        id: 'AVA047',
        text: 'I am more motivated by interesting problems than by financial incentives.',
        // NEW: Direct intrinsic vs. extrinsic comparison
        loadings: {
            D1_autonomy: 0.3,
            D2_innovation: 0.4,
            D3_collaboration: 0.0,
            D4_achievement: -0.2,
            D5_authority: -0.1,
            D6_people_focus: 0.0,
            D7_intrinsic: 0.8,
            D8_adaptability: 0.2
        }
    }
];

// ============================================
// Validation Function
// ============================================
export function validateItemBank() {
    const errors = [];
    const warnings = [];
    const dimensionKeys = [
        'D1_autonomy', 'D2_innovation', 'D3_collaboration',
        'D4_achievement', 'D5_authority', 'D6_people_focus',
        'D7_intrinsic', 'D8_adaptability'
    ];

    // Track coverage statistics
    const coverage = {};
    dimensionKeys.forEach(dim => {
        coverage[dim] = { positive: 0, negative: 0, highLoading: 0 };
    });

    ITEM_BANK.forEach((item) => {
        // Check all dimensions present
        dimensionKeys.forEach(dim => {
            if (typeof item.loadings[dim] !== 'number') {
                errors.push(`Item ${item.id}: Missing or invalid loading for ${dim}`);
            }
            if (item.loadings[dim] < -1 || item.loadings[dim] > 1) {
                errors.push(`Item ${item.id}: Loading ${dim} out of range [-1, 1]`);
            }

            // Track coverage
            if (item.loadings[dim] > 0.1) coverage[dim].positive++;
            if (item.loadings[dim] < -0.1) coverage[dim].negative++;
            if (Math.abs(item.loadings[dim]) >= 0.5) coverage[dim].highLoading++;
        });

        // Check at least one significant loading
        const hasSignificantLoading = Object.values(item.loadings).some(v => Math.abs(v) >= 0.3);
        if (!hasSignificantLoading) {
            errors.push(`Item ${item.id}: No significant loadings (all < 0.3)`);
        }

        // Check for reverseKeyed field (should not exist)
        if ('reverseKeyed' in item) {
            warnings.push(`Item ${item.id}: Contains deprecated 'reverseKeyed' field`);
        }
    });

    // Check dimension coverage
    dimensionKeys.forEach(dim => {
        if (coverage[dim].highLoading < 5) {
            warnings.push(`${dim}: Only ${coverage[dim].highLoading} items with |loading| >= 0.5 (recommend 6+)`);
        }
        if (coverage[dim].positive < 3) {
            warnings.push(`${dim}: Only ${coverage[dim].positive} items with positive loading (recommend 3+)`);
        }
        if (coverage[dim].negative < 3) {
            warnings.push(`${dim}: Only ${coverage[dim].negative} items with negative loading (recommend 3+)`);
        }
    });

    return { errors, warnings, coverage };
}

// ============================================
// Coverage Report Function
// ============================================
export function generateCoverageReport() {
    const dimensionKeys = [
        'D1_autonomy', 'D2_innovation', 'D3_collaboration',
        'D4_achievement', 'D5_authority', 'D6_people_focus',
        'D7_intrinsic', 'D8_adaptability'
    ];

    const report = {};

    dimensionKeys.forEach(dim => {
        const itemsWithHighLoading = ITEM_BANK.filter(item => Math.abs(item.loadings[dim]) >= 0.5);
        const positiveItems = ITEM_BANK.filter(item => item.loadings[dim] >= 0.5);
        const negativeItems = ITEM_BANK.filter(item => item.loadings[dim] <= -0.5);

        report[dim] = {
            totalHighLoading: itemsWithHighLoading.length,
            positiveCount: positiveItems.length,
            negativeCount: negativeItems.length,
            itemIds: itemsWithHighLoading.map(i => i.id)
        };
    });

    return report;
}
