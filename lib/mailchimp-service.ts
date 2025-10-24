
// Mailchimp Service - über Backend API Route (CORS-sicher)
export interface MailchimpSubscription {
  email: string;
  name: string;
  tags: string[];
  mergeFields?: Record<string, any>;
}

export async function addToMailchimp(subscription: MailchimpSubscription): Promise<boolean> {
  try {
    console.log('📮 Adding to Mailchimp via backend API...');
    console.log('📧 Email:', subscription.email);
    console.log('🏷️ Tags:', subscription.tags);

    const response = await fetch('/api/mailchimp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription)
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log('✅ Successfully added to Mailchimp:', result);
      return true;
    } else {
      console.error('❌ Mailchimp subscription failed:', result.error);
      return false;
    }
  } catch (error) {
    console.error('❌ Mailchimp service error:', error);
    return false;
  }
}

// Business Test 40+ spezifische Tags
export function getBusinessTags(resultType: string, totalScore: number, maxScore: number): string[] {
  const scorePercentage = Math.round((totalScore / maxScore) * 100);
  
  const baseTags = [
    'Business Test 40+',
    'Business Test Unique',	
    'Lead Generation',
    `Score: ${scorePercentage}%`,
    `Type: ${resultType}`
  ];

  // Score-basierte Tags
  if (scorePercentage >= 75) {
    baseTags.push('High Score', 'Ready to Start', 'Premium Lead');
  } else if (scorePercentage >= 60) {
    baseTags.push('Medium Score', 'Needs Guidance', 'Potential Client');
  } else {
    baseTags.push('Low Score', 'Early Stage', 'Education Needed');
  }

  // Kategorie-spezifische Tags können hier hinzugefügt werden
  return baseTags;
}

export function getBusinessMergeFields(submission: any): Record<string, any> {
  const scorePercentage = Math.round((submission.totalScore / submission.maxScore) * 100);
  
  return {
    BSCORE: submission.totalScore,
    BMAXSCORE: submission.maxScore,
    BPERCENT: scorePercentage,
    BRESULT: submission.resultType,
    BDATE: submission.timestamp || new Date().toISOString().split('T')[0],
    // Kategorie-Scores
    BMINDSET: submission.categoryScores?.unternehmer_mindset?.toFixed(1) || 'N/A',
    BRISK: submission.categoryScores?.risikobereitschaft?.toFixed(1) || 'N/A',
    BTECH: submission.categoryScores?.technische_affinitaet?.toFixed(1) || 'N/A',
    BAI: submission.categoryScores?.ai_bereitschaft?.toFixed(1) || 'N/A',
    BFINANCE: submission.categoryScores?.finanzielle_situation?.toFixed(1) || 'N/A'
  };
}
