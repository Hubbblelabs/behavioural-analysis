// DISC Assessment Questions - 30 MCQs aligned with DISC Personality Assessment model
export interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        type: 'D' | 'I' | 'S' | 'C';
    }[];
}

export const discQuestions: Question[] = [
    {
        id: 1,
        text: "In a group project, your natural role is to:",
        options: [
            { text: "Take charge and delegate tasks", type: "D" },
            { text: "Motivate everyone and keep the energy high", type: "I" },
            { text: "Support others quietly and maintain harmony", type: "S" },
            { text: "Organize and ensure accuracy in all tasks", type: "C" },
        ],
    },
    {
        id: 2,
        text: "When faced with a tight deadline, you usually:",
        options: [
            { text: "Push the team aggressively to finish fast", type: "D" },
            { text: "Encourage everyone with positive talk", type: "I" },
            { text: "Work calmly and steadily without stress", type: "S" },
            { text: "Plan systematically and check for errors", type: "C" },
        ],
    },
    {
        id: 3,
        text: "How do you prefer others to communicate with you?",
        options: [
            { text: "Be direct and to the point", type: "D" },
            { text: "Be friendly and enthusiastic", type: "I" },
            { text: "Be polite and patient", type: "S" },
            { text: "Be detailed and precise", type: "C" },
        ],
    },
    {
        id: 4,
        text: "When making decisions, you rely on:",
        options: [
            { text: "Quick judgment and gut instinct", type: "D" },
            { text: "Opinions and ideas from others", type: "I" },
            { text: "Stability and past experiences", type: "S" },
            { text: "Data, logic, and analysis", type: "C" },
        ],
    },
    {
        id: 5,
        text: "In conflict situations, you tend to:",
        options: [
            { text: "Confront and resolve it quickly", type: "D" },
            { text: "Avoid conflict by lightening the mood", type: "I" },
            { text: "Stay quiet and let things settle naturally", type: "S" },
            { text: "Analyze the issue before reacting", type: "C" },
        ],
    },
    {
        id: 6,
        text: "Your work style is best described as:",
        options: [
            { text: "Competitive and goal-oriented", type: "D" },
            { text: "Social and people-driven", type: "I" },
            { text: "Consistent and supportive", type: "S" },
            { text: "Structured and methodical", type: "C" },
        ],
    },
    {
        id: 7,
        text: "What motivates you the most?",
        options: [
            { text: "Winning and achieving results", type: "D" },
            { text: "Recognition and appreciation", type: "I" },
            { text: "Stability and secure environment", type: "S" },
            { text: "Accuracy and high-quality output", type: "C" },
        ],
    },
    {
        id: 8,
        text: "When a sudden change occurs, you:",
        options: [
            { text: "Adapt quickly and take charge", type: "D" },
            { text: "Try to involve others in finding solutions", type: "I" },
            { text: "Feel uneasy but slowly adjust", type: "S" },
            { text: "Re-evaluate the plan carefully", type: "C" },
        ],
    },
    {
        id: 9,
        text: "How do you respond to criticism?",
        options: [
            { text: "Defend your position strongly", type: "D" },
            { text: "Feel emotional but try to stay positive", type: "I" },
            { text: "Become quiet and withdraw", type: "S" },
            { text: "Reflect deeply and analyze what went wrong", type: "C" },
        ],
    },
    {
        id: 10,
        text: "In team discussions, you usually:",
        options: [
            { text: "Lead the conversation", type: "D" },
            { text: "Share creative ideas and stories", type: "I" },
            { text: "Listen more than you speak", type: "S" },
            { text: "Ask detailed, clarifying questions", type: "C" },
        ],
    },
    {
        id: 11,
        text: "Your ideal work environment is:",
        options: [
            { text: "Fast-paced with pressure and challenges", type: "D" },
            { text: "Interactive and socially engaging", type: "I" },
            { text: "Stable and predictable", type: "S" },
            { text: "Organized and rule-based", type: "C" },
        ],
    },
    {
        id: 12,
        text: "When learning something new, you prefer:",
        options: [
            { text: "Hands-on trials and experimentation", type: "D" },
            { text: "Group activities and discussions", type: "I" },
            { text: "Step-by-step tutorials", type: "S" },
            { text: "Reading manuals and structured materials", type: "C" },
        ],
    },
    {
        id: 13,
        text: "You handle team disagreements by:",
        options: [
            { text: "Taking control and making the decision", type: "D" },
            { text: "Encouraging open conversation", type: "I" },
            { text: "Avoiding heated arguments and keeping peace", type: "S" },
            { text: "Reviewing facts and logic to decide", type: "C" },
        ],
    },
    {
        id: 14,
        text: "What best describes your communication style?",
        options: [
            { text: "Direct and assertive", type: "D" },
            { text: "Expressive and friendly", type: "I" },
            { text: "Calm and reserved", type: "S" },
            { text: "Formal and systematic", type: "C" },
        ],
    },
    {
        id: 15,
        text: "When given a new challenge, your first reaction is:",
        options: [
            { text: '"Let\'s get started immediately!"', type: "D" },
            { text: '"Who can join me on this?"', type: "I" },
            { text: '"I\'ll take time to understand it"', type: "S" },
            { text: '"I need more information first"', type: "C" },
        ],
    },
    {
        id: 16,
        text: "What frustrates you the most at work?",
        options: [
            { text: "Slow decision-making", type: "D" },
            { text: "Lack of interaction or excitement", type: "I" },
            { text: "Too much pressure or sudden changes", type: "S" },
            { text: "Disorganization or unclear instructions", type: "C" },
        ],
    },
    {
        id: 17,
        text: "How do you handle responsibilities?",
        options: [
            { text: "Take ownership and push for results", type: "D" },
            { text: "Prefer tasks with people interaction", type: "I" },
            { text: "Work steadily and reliably", type: "S" },
            { text: "Complete tasks with precision", type: "C" },
        ],
    },
    {
        id: 18,
        text: "Your leadership style is:",
        options: [
            { text: "Commanding and decisive", type: "D" },
            { text: "Inspiring and motivational", type: "I" },
            { text: "Supportive and coaching", type: "S" },
            { text: "Analytical and process-driven", type: "C" },
        ],
    },
    {
        id: 19,
        text: "Which statement fits you most?",
        options: [
            { text: "I love taking risks", type: "D" },
            { text: "I love meeting new people", type: "I" },
            { text: "I love maintaining routines", type: "S" },
            { text: "I love working systematically", type: "C" },
        ],
    },
    {
        id: 20,
        text: "In large social events, you usually:",
        options: [
            { text: "Observe but take charge if needed", type: "D" },
            { text: "Socialize and meet new people", type: "I" },
            { text: "Stick with familiar people", type: "S" },
            { text: "Stay reserved unless necessary", type: "C" },
        ],
    },
    {
        id: 21,
        text: "Your biggest strength is:",
        options: [
            { text: "Decision-making", type: "D" },
            { text: "Communication", type: "I" },
            { text: "Reliability", type: "S" },
            { text: "Problem-solving", type: "C" },
        ],
    },
    {
        id: 22,
        text: "When assigned a group task, you prefer to:",
        options: [
            { text: "Lead the group", type: "D" },
            { text: "Be the spokesperson", type: "I" },
            { text: "Support others behind the scenes", type: "S" },
            { text: "Plan the structure and process", type: "C" },
        ],
    },
    {
        id: 23,
        text: "What bothers you the most in group projects?",
        options: [
            { text: "Lack of urgency", type: "D" },
            { text: "Lack of collaboration", type: "I" },
            { text: "Conflicts or aggressive people", type: "S" },
            { text: "Improper planning", type: "C" },
        ],
    },
    {
        id: 24,
        text: "Your risk-taking appetite is:",
        options: [
            { text: "High - I enjoy bold moves", type: "D" },
            { text: "Moderate - depends on people involved", type: "I" },
            { text: "Low - I prefer predictable outcomes", type: "S" },
            { text: "Very calculated and data-based", type: "C" },
        ],
    },
    {
        id: 25,
        text: "When dealing with new people, you are:",
        options: [
            { text: "Assertive and confident", type: "D" },
            { text: "Friendly and talkative", type: "I" },
            { text: "Polite and reserved", type: "S" },
            { text: "Cautious and formal", type: "C" },
        ],
    },
    {
        id: 26,
        text: "When assigned multiple tasks, you:",
        options: [
            { text: "Prioritize quickly and act fast", type: "D" },
            { text: "Seek help or collaborate", type: "I" },
            { text: "Work steadily, one at a time", type: "S" },
            { text: "Make a detailed checklist", type: "C" },
        ],
    },
    {
        id: 27,
        text: "Your preferred role in innovation is:",
        options: [
            { text: "Driving change", type: "D" },
            { text: "Generating ideas", type: "I" },
            { text: "Ensuring smooth implementation", type: "S" },
            { text: "Analyzing feasibility", type: "C" },
        ],
    },
    {
        id: 28,
        text: "Your time management style is:",
        options: [
            { text: "Focus on results, not process", type: "D" },
            { text: "Flexible and people-oriented", type: "I" },
            { text: "Steady and planned", type: "S" },
            { text: "Rigid and structured", type: "C" },
        ],
    },
    {
        id: 29,
        text: "How do you respond to new responsibilities?",
        options: [
            { text: '"Give it to me - I\'ll handle it."', type: "D" },
            { text: '"Let\'s work together on it!"', type: "I" },
            { text: '"I\'ll adjust slowly."', type: "S" },
            { text: '"I need clarity and structure first."', type: "C" },
        ],
    },
    {
        id: 30,
        text: "You feel most stressed when:",
        options: [
            { text: "You are not in control", type: "D" },
            { text: "You are isolated from people", type: "I" },
            { text: "You face sudden disruptions", type: "S" },
            { text: "You get incomplete or unclear information", type: "C" },
        ],
    },
];

// DISC Color Scheme
export const discColors = {
    D: { primary: "#EF4444", light: "#FEE2E2", name: "Dominance", gradient: "from-red-500 to-red-600" },
    I: { primary: "#F59E0B", light: "#FEF3C7", name: "Influence", gradient: "from-amber-400 to-yellow-500" },
    S: { primary: "#10B981", light: "#D1FAE5", name: "Steadiness", gradient: "from-emerald-500 to-green-600" },
    C: { primary: "#3B82F6", light: "#DBEAFE", name: "Conscientiousness", gradient: "from-blue-500 to-blue-600" },
};

// Personality Descriptions
export interface PersonalityProfile {
    type: 'D' | 'I' | 'S' | 'C';
    title: string;
    tagline: string;
    description: string;
    coreStrengths: string[];
    naturalBehaviors: string[];
    communicationStyle: string;
    stressBehavior: string;
    developmentAreas: string[];
    idealEnvironment: string;
    icon: string;
}

export const personalityProfiles: Record<'D' | 'I' | 'S' | 'C', PersonalityProfile> = {
    D: {
        type: "D",
        title: "The Driver",
        tagline: "Results-oriented, decisive, and competitive",
        description: "You are a natural leader who thrives on challenges and achieving results. You're direct, assertive, and focused on the bottom line. You prefer to take charge and make quick decisions, often seeing the big picture while others get caught up in details. Your competitive nature drives you to excel and push boundaries.",
        coreStrengths: [
            "Strong decision-making abilities",
            "Results-driven mindset",
            "Ability to take charge under pressure",
            "Competitive and goal-oriented",
            "Quick problem solver",
            "Embraces challenges fearlessly",
        ],
        naturalBehaviors: [
            "Takes initiative and leads by example",
            "Focuses on achieving goals efficiently",
            "Prefers direct, no-nonsense communication",
            "Delegates tasks to optimize outcomes",
            "Thrives in high-pressure environments",
            "Makes bold decisions quickly",
        ],
        communicationStyle: "Direct, brief, and to the point. You prefer quick conversations that focus on results and outcomes rather than small talk. You value efficiency in communication and expect others to be equally straightforward.",
        stressBehavior: "Under stress, you may become more aggressive, demanding, or impatient. You might take over tasks from others and become overly controlling. You may appear insensitive to others' feelings when focused on results.",
        developmentAreas: [
            "Practice active listening and patience",
            "Consider others' perspectives before deciding",
            "Balance task focus with relationship building",
            "Learn to delegate more effectively",
            "Develop empathy and emotional awareness",
        ],
        idealEnvironment: "Fast-paced, challenging, and results-focused with autonomy and authority",
        icon: "⚡",
    },
    I: {
        type: "I",
        title: "The Influencer",
        tagline: "Enthusiastic, optimistic, and collaborative",
        description: "You are a natural communicator and motivator who brings energy and enthusiasm to every interaction. You excel at building relationships and inspiring others. Your optimistic outlook and social nature make you the life of any group. You thrive on recognition and love being part of a team.",
        coreStrengths: [
            "Excellent communication skills",
            "Natural ability to inspire and motivate",
            "Strong relationship builder",
            "Creative and innovative thinking",
            "Optimistic and enthusiastic",
            "Team-oriented approach",
        ],
        naturalBehaviors: [
            "Energizes and motivates team members",
            "Builds networks and relationships easily",
            "Generates creative ideas and solutions",
            "Collaborates effectively with diverse groups",
            "Celebrates successes enthusiastically",
            "Uses storytelling to engage others",
        ],
        communicationStyle: "Warm, friendly, and expressive. You enjoy conversations and use enthusiasm to connect with others. You're a natural storyteller who uses emotion and energy to communicate ideas effectively.",
        stressBehavior: "Under stress, you may become disorganized, overly talkative, or scattered. You might seek approval excessively and become more emotional. Focus on details may diminish, and you might overlook important tasks.",
        developmentAreas: [
            "Improve time management and organization",
            "Focus on follow-through and completion",
            "Balance enthusiasm with practicality",
            "Listen as much as you speak",
            "Pay attention to details and data",
        ],
        idealEnvironment: "Social, collaborative, and recognition-rich with opportunities for interaction",
        icon: "🌟",
    },
    S: {
        type: "S",
        title: "The Supporter",
        tagline: "Patient, reliable, and team-oriented",
        description: "You are a dependable and supportive team player who values harmony and stability. You excel at maintaining consistent performance and supporting others. Your patient nature and loyalty make you invaluable to any team. You prefer a steady, predictable environment where you can build lasting relationships.",
        coreStrengths: [
            "Highly reliable and consistent",
            "Excellent team player",
            "Patient and understanding",
            "Strong listener and supporter",
            "Creates harmony in groups",
            "Loyal and committed",
        ],
        naturalBehaviors: [
            "Provides steady, reliable support",
            "Listens attentively to others",
            "Maintains calm in stressful situations",
            "Builds long-lasting relationships",
            "Works consistently and methodically",
            "Prefers collaboration over competition",
        ],
        communicationStyle: "Calm, patient, and sincere. You're an excellent listener who prefers meaningful conversations over small talk. You communicate in a warm, supportive manner and take time to ensure others feel heard.",
        stressBehavior: "Under stress, you may become overly accommodating, passive, or resistant to change. You might internalize problems and avoid confrontation. Decision-making may become slower as you seek consensus.",
        developmentAreas: [
            "Build confidence in expressing opinions",
            "Embrace change more readily",
            "Set boundaries when needed",
            "Take initiative more often",
            "Develop assertiveness skills",
        ],
        idealEnvironment: "Stable, harmonious, and supportive with clear expectations and teamwork",
        icon: "💚",
    },
    C: {
        type: "C",
        title: "The Analyst",
        tagline: "Precise, logical, and quality-focused",
        description: "You are a detail-oriented and analytical thinker who values accuracy and quality. You excel at analyzing complex information and ensuring work meets high standards. Your systematic approach and attention to detail make you excellent at problem-solving. You prefer well-organized environments with clear guidelines.",
        coreStrengths: [
            "Exceptional attention to detail",
            "Strong analytical abilities",
            "Systematic and organized approach",
            "High-quality standards",
            "Logical problem solver",
            "Thorough and careful",
        ],
        naturalBehaviors: [
            "Analyzes information thoroughly before acting",
            "Ensures accuracy and precision in work",
            "Creates systems and processes",
            "Asks probing questions for clarity",
            "Documents and tracks important details",
            "Follows established procedures diligently",
        ],
        communicationStyle: "Precise, factual, and detailed. You prefer written communication and appreciate well-organized information. You ask clarifying questions and expect accuracy in the information you receive.",
        stressBehavior: "Under stress, you may become overly critical, perfectionistic, or withdrawn. You might over-analyze situations leading to paralysis. You may become more rigid and focus excessively on minor details.",
        developmentAreas: [
            "Balance perfectionism with pragmatism",
            "Make decisions with incomplete information",
            "Improve interpersonal communication",
            "Accept that 'good enough' can be enough",
            "Take more calculated risks",
        ],
        idealEnvironment: "Structured, quality-focused, and detail-oriented with clear standards and expectations",
        icon: "🔷",
    },
};

// Career Recommendations
export interface CareerRecommendation {
    title: string;
    description: string;
    skills: string[];
    icon: string;
}

export const careerRecommendations: Record<'D' | 'I' | 'S' | 'C', CareerRecommendation[]> = {
    D: [
        {
            title: "Business Development Manager",
            description: "Drive business growth, negotiate deals, and build strategic partnerships. Your decisive nature and results-focus make you ideal for expanding market presence.",
            skills: ["Negotiation", "Strategic Planning", "Leadership", "Sales"],
            icon: "📈",
        },
        {
            title: "Entrepreneur",
            description: "Start and lead your own venture. Your risk-taking ability, decisiveness, and drive for results are perfect for building something from the ground up.",
            skills: ["Vision", "Risk Management", "Decision Making", "Innovation"],
            icon: "🚀",
        },
        {
            title: "Project Leader",
            description: "Lead teams to deliver complex projects on time and budget. Your ability to take charge and drive results ensures project success.",
            skills: ["Leadership", "Planning", "Team Management", "Execution"],
            icon: "🎯",
        },
    ],
    I: [
        {
            title: "Marketing Manager",
            description: "Create compelling campaigns and build brand awareness. Your creativity, communication skills, and enthusiasm are perfect for connecting with audiences.",
            skills: ["Communication", "Creativity", "Brand Building", "Team Collaboration"],
            icon: "📣",
        },
        {
            title: "HR / Training Specialist",
            description: "Develop and motivate talent within organizations. Your people skills and ability to inspire others make you excellent at building strong teams.",
            skills: ["People Skills", "Training", "Motivation", "Relationship Building"],
            icon: "👥",
        },
        {
            title: "Sales Executive",
            description: "Build relationships and close deals with customers. Your enthusiasm, persuasion skills, and natural charm drive sales success.",
            skills: ["Persuasion", "Relationship Building", "Presentation", "Networking"],
            icon: "💼",
        },
    ],
    S: [
        {
            title: "Customer Success Specialist",
            description: "Ensure customer satisfaction and build long-term relationships. Your patience, reliability, and supportive nature create exceptional customer experiences.",
            skills: ["Customer Service", "Patience", "Problem Resolution", "Empathy"],
            icon: "🤝",
        },
        {
            title: "Operations Coordinator",
            description: "Maintain smooth operational processes and support team efficiency. Your consistency and attention to process ensure reliable operations.",
            skills: ["Organization", "Process Management", "Coordination", "Reliability"],
            icon: "⚙️",
        },
        {
            title: "Teacher / Coach",
            description: "Guide and support others in their learning journey. Your patience, supportive nature, and consistency make you an excellent educator.",
            skills: ["Teaching", "Patience", "Mentoring", "Communication"],
            icon: "📚",
        },
    ],
    C: [
        {
            title: "Data Analyst",
            description: "Analyze complex data to drive business decisions. Your analytical mindset and attention to detail uncover valuable insights.",
            skills: ["Data Analysis", "Critical Thinking", "Statistics", "Problem Solving"],
            icon: "📊",
        },
        {
            title: "Quality Assurance Specialist",
            description: "Ensure products and processes meet high standards. Your meticulous nature and systematic approach guarantee quality outcomes.",
            skills: ["Quality Control", "Testing", "Documentation", "Attention to Detail"],
            icon: "✅",
        },
        {
            title: "Financial Analyst",
            description: "Analyze financial data and make investment recommendations. Your analytical skills and precision are perfect for financial decision-making.",
            skills: ["Financial Analysis", "Modeling", "Research", "Accuracy"],
            icon: "💰",
        },
    ],
};

// Scoring Utility Functions
export type DISCType = 'D' | 'I' | 'S' | 'C';

export interface DISCScores {
    D: number;
    I: number;
    S: number;
    C: number;
}

export interface ScoreLevel {
    level: 'Low' | 'Moderate' | 'High';
    description: string;
}

export function getScoreLevel(score: number): ScoreLevel {
    if (score <= 7) {
        return { level: 'Low', description: 'This trait is not a dominant part of your personality' };
    } else if (score <= 14) {
        return { level: 'Moderate', description: 'This trait is present but balanced with others' };
    } else {
        return { level: 'High', description: 'This is a dominant trait in your personality' };
    }
}

export function calculateScores(answers: Record<number, DISCType>): DISCScores {
    const scores: DISCScores = { D: 0, I: 0, S: 0, C: 0 };

    Object.values(answers).forEach((type) => {
        scores[type] += 1;
    });

    return scores;
}

export function getRankedTypes(scores: DISCScores): DISCType[] {
    return (['D', 'I', 'S', 'C'] as DISCType[]).sort((a, b) => scores[b] - scores[a]);
}

export function getTopCareers(rankedTypes: DISCType[]): CareerRecommendation[] {
    const careers: CareerRecommendation[] = [];

    // Get one career from each of the top 3 types
    for (let i = 0; i < 3 && i < rankedTypes.length; i++) {
        const type = rankedTypes[i];
        const typeCareer = careerRecommendations[type][0]; // Get top career for each type
        if (typeCareer) {
            careers.push(typeCareer);
        }
    }

    return careers;
}
