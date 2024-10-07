export const cookies = {
  necessary: [
    {
      name: 'session_id',
      description: 'Used to maintain user session',
      expiration: 'Session',
    },
  ],
  functional: [
    {
      name: 'language_preference',
      description: "Stores the user's language preference",
      expiration: '1 year',
    },
  ],
  analytics: [
    {
      name: '_ga',
      description: 'Google Analytics tracking',
      expiration: '2 years',
    },
  ],
  marketing: [
    {
      name: 'fb_pixel',
      description: 'Facebook pixel for retargeting ads',
      expiration: '3 months',
    },
  ],
};
