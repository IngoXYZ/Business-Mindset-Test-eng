
export interface Question {
  id: string;
  category: string;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

export const categories = {
  unternehmer_mindset: 'Entrepreneurial Mindset',
  risikobereitschaft: 'Risk Tolerance',
  technische_affinitaet: 'Technical Affinity',
  ai_bereitschaft: 'AI Readiness',
  finanzielle_situation: 'Financial Situation',
  work_life_balance: 'Work-Life Balance',
  lernbereitschaft: 'Learning Readiness',
  netzwerk_marketing: 'Network & Marketing'
};

export const questions: Question[] = [
  // Entrepreneurial Mindset (2 Questions)
  {
    id: 'um1',
    category: 'unternehmer_mindset',
    text: 'How do you deal with uncertainty and unpredictable situations?',
    options: [
      { text: 'I avoid them and prefer clear structures', score: 1 },
      { text: 'They stress me out, but I manage somehow', score: 2 },
      { text: 'I plan well ahead and minimize risks', score: 3 },
      { text: 'I see them as opportunities and respond flexibly', score: 4 },
      { text: 'I love the challenge and enjoy improvising', score: 5 }
    ]
  },
  {
    id: 'um2',
    category: 'unternehmer_mindset',
    text: 'Imagine your business plan doesn\'t work. How do you react?',
    options: [
      { text: 'I would probably give up and go back to employment', score: 1 },
      { text: 'Very frustrated, need a long time to recover', score: 2 },
      { text: 'Analyze what went wrong and develop Plan B', score: 3 },
      { text: 'Quickly pivot and try a new strategy', score: 4 },
      { text: 'That\'s part of the game - immediately start the next iteration', score: 5 }
    ]
  },

  // Risk Tolerance (2 Questions)
  {
    id: 'r1',
    category: 'risikobereitschaft',
    text: 'How do you feel about risking your financial security for your own business?',
    options: [
      { text: 'Never, security comes first', score: 1 },
      { text: 'Only with several years of savings', score: 2 },
      { text: 'With 1-2 years of financial cushion', score: 3 },
      { text: '6 months buffer is enough for me', score: 4 },
      { text: 'Sometimes you have to go all in', score: 5 }
    ]
  },
  {
    id: 'r2',
    category: 'risikobereitschaft',
    text: 'How would you react if friends/family criticize your business plans?',
    options: [
      { text: 'I would probably give it up', score: 1 },
      { text: 'Very unsettled, would reconsider everything', score: 2 },
      { text: 'Their opinion matters, but I decide for myself', score: 3 },
      { text: 'I listen, but follow my own path', score: 4 },
      { text: 'Their doubts motivate me even more', score: 5 }
    ]
  },

  // Technical Affinity (2 Questions)
  {
    id: 't1',
    category: 'technische_affinitaet',
    text: 'How do you deal with new digital tools and software?',
    options: [
      { text: 'I avoid them and stick to proven methods', score: 1 },
      { text: 'Difficult for me, need a lot of help', score: 2 },
      { text: 'With instructions, I usually manage', score: 3 },
      { text: 'I enjoy learning and trying things out', score: 4 },
      { text: 'I love new tech and am often an early adopter', score: 5 }
    ]
  },
  {
    id: 't2',
    category: 'technische_affinitaet',
    text: 'How would you rate your online marketing skills?',
    options: [
      { text: 'No clue, that\'s completely foreign to me', score: 1 },
      { text: 'Very basic, Instagram and Facebook for personal use', score: 2 },
      { text: 'Have the basics, but unsure about business application', score: 3 },
      { text: 'Good knowledge, can work independently', score: 4 },
      { text: 'Professional level, I know SEO, Ads, Analytics well', score: 5 }
    ]
  },

  // AI Readiness (2 Questions)
  {
    id: 'ai1',
    category: 'ai_bereitschaft',
    text: 'What\'s your stance on Artificial Intelligence in a business context?',
    options: [
      { text: 'Skeptical, prefer to rely on human work', score: 1 },
      { text: 'Uncertain, don\'t know much about it', score: 2 },
      { text: 'Interested, but haven\'t actively used it yet', score: 3 },
      { text: 'Already using some AI tools personally/professionally', score: 4 },
      { text: 'AI is the future, I want to be a pioneer', score: 5 }
    ]
  },
  {
    id: 'ai2',
    category: 'ai_bereitschaft',
    text: 'Imagine an AI tool could handle 70% of your routine work. Your reaction?',
    options: [
      { text: 'Scary, then I would be obsolete', score: 1 },
      { text: 'Skeptical, prefer to do everything myself', score: 2 },
      { text: 'Interesting, would test it cautiously', score: 3 },
      { text: 'Great, more time for strategic work', score: 4 },
      { text: 'Perfect! Automation is the key to success', score: 5 }
    ]
  },

  // Financial Situation (2 Questions)
  {
    id: 'f1',
    category: 'finanzielle_situation',
    text: 'What\'s your current financial situation for self-employment?',
    options: [
      { text: 'Very tight, living paycheck to paycheck', score: 1 },
      { text: 'Tight, little room for investments', score: 2 },
      { text: 'Solid, have some savings', score: 3 },
      { text: 'Good, can handle business investments', score: 4 },
      { text: 'Very good, money is not a limiting factor', score: 5 }
    ]
  },
  {
    id: 'f2',
    category: 'finanzielle_situation',
    text: 'How do you handle business expenses and investments?',
    options: [
      { text: 'Very frugal, only invest when absolutely necessary', score: 1 },
      { text: 'Cautious, think three times about every dollar', score: 2 },
      { text: 'Thoughtful, invest strategically according to plan', score: 3 },
      { text: 'Bold, see investments as necessary', score: 4 },
      { text: 'Strategically aggressive, you have to spend money to make money', score: 5 }
    ]
  },

  // Work-Life Balance (2 Questions)
  {
    id: 'wl1',
    category: 'work_life_balance',
    text: 'How do you feel about 60+ hour work weeks during the startup phase?',
    options: [
      { text: 'Impossible, work-life balance is sacred to me', score: 1 },
      { text: 'Difficult, family/hobbies are very important', score: 2 },
      { text: 'Temporarily okay, but not permanently', score: 3 },
      { text: 'No problem if it serves the goal', score: 4 },
      { text: 'Hustle mode on! Success requires sacrifice', score: 5 }
    ]
  },
  {
    id: 'wl2',
    category: 'work_life_balance',
    text: 'How would your family/partner react to your self-employment plans?',
    options: [
      { text: 'Very skeptical to rejecting', score: 1 },
      { text: 'Concerned about the uncertainty', score: 2 },
      { text: 'Neutral, as long as finances work out', score: 3 },
      { text: 'Supportive, if the plan is well thought out', score: 4 },
      { text: 'Full support, team effort', score: 5 }
    ]
  },

  // Learning Readiness (1 Question)
  {
    id: 'l1',
    category: 'lernbereitschaft',
    text: 'How do you handle being a beginner again in many business areas at 40+?',
    options: [
      { text: 'Frustrating, I should already know everything', score: 1 },
      { text: 'Difficult, but necessary', score: 2 },
      { text: 'Challenging, but doable', score: 3 },
      { text: 'Exciting, I enjoy learning', score: 4 },
      { text: 'Perfect! Lifelong learning keeps you young', score: 5 }
    ]
  },

  // Network & Marketing (2 Questions)
  {
    id: 'nm1',
    category: 'netzwerk_marketing',
    text: 'How do you feel about actively marketing yourself and your business?',
    options: [
      { text: 'Very uncomfortable, it\'s not for me', score: 1 },
      { text: 'Difficult, feels like bragging', score: 2 },
      { text: 'Okay, if it\'s factual and honest', score: 3 },
      { text: 'Gladly, I\'m proud of my work', score: 4 },
      { text: 'I love it! Marketing is part of success', score: 5 }
    ]
  },
  {
    id: 'nm2',
    category: 'netzwerk_marketing',
    text: 'How large is your professional network for potential clients/partners?',
    options: [
      { text: 'Very small, know few business contacts', score: 1 },
      { text: 'Limited, mainly former colleagues', score: 2 },
      { text: 'Solid base in my industry', score: 3 },
      { text: 'Well connected, also across industries', score: 4 },
      { text: 'Excellent network, many potential opportunities', score: 5 }
    ]
  }
];

export const getResultType = (totalScore: number): string => {
  // Total possible score: 15 questions * 5 points = 75 points
  if (totalScore >= 60) return 'Ready for Business!';
  if (totalScore >= 45) return 'Almost Ready';
  if (totalScore >= 30) return 'Preparation Needed';
  return 'Not Yet Ready';
};

export const getResultDetails = (resultType: string) => {
  const results = {
    'Ready for Business!': {
      title: 'Ready for Business! 🚀',
      description: 'Congratulations! You have all the important qualities for a successful business at 40+. Your mindset, risk tolerance, and skills are optimal for self-employment.',
      color: 'text-green-600'
    },
    'Almost Ready': {
      title: 'Almost Ready! 💪',
      description: 'You have very good prerequisites for self-employment! With targeted preparation in some areas, you can successfully start your own business.',
      color: 'text-blue-600'
    },
    'Preparation Needed': {
      title: 'Preparation Needed 📚',
      description: 'You have potential, but there are still important areas to develop. Invest time in further education and building the necessary skills - then nothing will stand in the way of your business!',
      color: 'text-yellow-600'
    },
    'Not Yet Ready': {
      title: 'Not Yet Ready 🎯',
      description: 'Employment is probably the better choice for you at the moment. Use the time to work specifically on your entrepreneurial skills - the right time will come!',
      color: 'text-red-600'
    }
  };
  return results[resultType as keyof typeof results];
};

export const getRecommendations = (categoryScores: Record<string, number>): string[] => {
  const recommendations: string[] = [];
  
  Object.entries(categoryScores).forEach(([category, score]) => {
    if (score < 3.5) {
      switch (category) {
        case 'unternehmer_mindset':
          recommendations.push('🧠 Strengthen Your Entrepreneurial Mindset: Read business books, listen to entrepreneur podcasts, and connect with self-employed people. Practice strategic thinking and problem-solving.');
          break;
        case 'risikobereitschaft':
          recommendations.push('🎯 Increase Your Risk Tolerance: Start with small business experiments (side hustles) and build confidence in your entrepreneurial skills. Calculated risks are the key to success.');
          break;
        case 'technische_affinitaet':
          recommendations.push('💻 Improve Your Tech Skills: Invest time in digital education - online courses, YouTube tutorials, or local workshops. Start with the basics: website, social media, simple tools.');
          break;
        case 'ai_bereitschaft':
          recommendations.push('🤖 Embrace AI: Try out ChatGPT, Canva AI, or other tools. AI will be your business advantage! Start with simple applications like text creation or image editing.');
          break;
        case 'finanzielle_situation':
          recommendations.push('💰 Optimize Your Finances: Create a business savings plan, reduce unnecessary expenses, and systematically build capital for your business. Perhaps start part-time first?');
          break;
        case 'work_life_balance':
          recommendations.push('⚖️ Prepare Family/Partner: Communicate openly about your plans and get them on board. Starting a business initially means more work - but for a common goal.');
          break;
        case 'lernbereitschaft':
          recommendations.push('📚 Develop a Love for Learning: See every day as a chance to grow! Online courses, masterminds, business events - consciously invest in your development. Learning never stops!');
          break;
        case 'netzwerk_marketing':
          recommendations.push('🌐 Build Your Network: Activate LinkedIn, attend business events, forge authentic relationships. Your network is your net worth - even at 40+ you can build great circles!');
          break;
      }
    }
  });
  
  // Add positive recommendations for high scores
  Object.entries(categoryScores).forEach(([category, score]) => {
    if (score >= 4.5) {
      switch (category) {
        case 'unternehmer_mindset':
          recommendations.push('✅ Your entrepreneurial mindset is excellent - you already think like a successful business owner!');
          break;
        case 'ai_bereitschaft':
          recommendations.push('🚀 Your AI affinity is outstanding - use this as a competitive advantage in your business!');
          break;
        case 'technische_affinitaet':
          recommendations.push('🌟 Your tech skills are top-notch - you will succeed in digital business!');
          break;
        case 'netzwerk_marketing':
          recommendations.push('💫 Your network and marketing mindset are perfect - this will be your business turbo!');
          break;
      }
    }
  });
  
  if (recommendations.length === 0) {
    recommendations.push('🎉 You are already very well-balanced! Use your strengths and start your business adventure with confidence. You have what it takes to succeed!');
  }
  
  return recommendations;
};
