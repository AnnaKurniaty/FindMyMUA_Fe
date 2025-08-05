// Fix for skin profile data access in customer dashboard
export const skinProfileFix = {
  // Correct data structure mapping
  mapProfileData(profile) {
    if (!profile) return null;
    
    return {
      skin_tone: profile.skin_tone || 'Not specified',
      skin_type: Array.isArray(profile.skin_type) ? profile.skin_type : [profile.skin_type || 'Not specified'],
      skin_issues: profile.skin_issues || 'Not specified',
      skincare_history: profile.skincare_history || 'Not specified',
      allergies: profile.allergies || 'None',
      makeup_preferences: Array.isArray(profile.makeup_preferences) ? profile.makeup_preferences : [profile.makeup_preferences || 'Not specified']
    };
  },
  
  // Check if skin profile exists
  hasSkinProfile(profile) {
    return profile && (
      profile.skin_tone || 
      profile.skin_type || 
      profile.skin_issues || 
      profile.skincare_history || 
      profile.allergies || 
      profile.makeup_preferences
    );
  }
};
