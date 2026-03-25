const LANGUAGES = [
  { code: 'en', label: 'English'  },
  { code: 'de', label: 'German'   },
  { code: 'fr', label: 'French'   },
  { code: 'it', label: 'Italian'  },
];

const ICONS = ['fa-headphones','fa-apple-whole','fa-heart-pulse','fa-brain','fa-leaf'];
const GRADS = ['g0','g1','g2','g3','g4'];

const DATA = [
  {
    name: 'Weight Loss Session', icon: 'fa-fire-flame-curved',
    programs: {
      en: [
        { title: 'Changing outlook',                                                                                                         dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/1YgYuVxS5l9Pm5g_Ob2rr4-VfqUDzXLom', thumb: 'https://lh3.googleusercontent.com/d/1SWom3KhlXNEwgaSp5Yq1B9UjrVHFLehP' },
        { title: 'Visualising new habits',                                                                                                   dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/1haLE3f_gs2YRGJ4e5bEdJZnvnjZ54aGP', thumb: 'https://lh3.googleusercontent.com/d/1mzvkVQyTS6TLWsYmLEL1xZufrXhZQE__' },
        { title: 'Solidifying new practices',                                                                                                dur: '20 mins', size: '24.2 MB', url: 'https://lh3.googleusercontent.com/d/1dSZhgb6PlSLl_DlDkGXkOCI5OGzEUV_F', thumb: 'https://lh3.googleusercontent.com/d/1JFfRkVlHm-svNVoj92rF0SxYAurx-z1b' },
        { title: 'Changing views on unhealthy food and sugary drinks',                                                                       dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/1ipJzycO3XW9K5tc3sXpfyGJtJwTP9JTz', thumb: 'https://lh3.googleusercontent.com/d/1hYV3sfCtaLntgkJFVk3TeKYh90mlnT4N' },
        { title: 'Eliminating binge eating habits',                                                                                          dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/1bsaxt6E4bypLAcvZrFrkSv9D2Sqrfgr7', thumb: 'https://lh3.googleusercontent.com/d/1Z8S9nQeeGuWVbZ0pi4gUk4jvr4W4yA66' },
        { title: 'Managing caloric intake effectively',                                                                                      dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/1kemN-IPqsL6Bj7IOSn5x5sML-Z8yArTS', thumb: 'https://lh3.googleusercontent.com/d/1uMiQJO3GcAi7auuIiXbappfXS4Du6oaH' },
        { title: 'Establishing a habit of hydration',                                                                                        dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/13SZQd0EEjShJ5ttFDEHaquyYOq2MHqz2', thumb: 'https://lh3.googleusercontent.com/d/1mVCY3218TbGYKlEDxGp96szh5XXEIhay' },
        { title: 'Fostering a positive food relationship',                                                                                   dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/1I7NDpPXYQvms-SmE6K0rIHyUvuSyIKJy', thumb: 'https://lh3.googleusercontent.com/d/1nKGiabEvJrmbElp80Yxi1kmIGszi3Fgc' },
        { title: 'Maintaining a sustainable healthy eating routine',                                                                         dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/1YSfHX_vTm8RsSCyxPMCDOdnevtjTSFIO', thumb: 'https://lh3.googleusercontent.com/d/17AmWxgMPwvyPt48y7lqw8rPpg9gii--s' },
        { title: 'Creating your personal wellness manifesto',                                                                                dur: '20 mins', size: '24.1 MB', url: 'https://lh3.googleusercontent.com/d/16yvyPdc-D0BwegAQ5Qaa-w1fl5l03DmB', thumb: 'https://lh3.googleusercontent.com/d/1_EV7yKSA5qrwYnsEtlmzIraqP3WNFNvf' },
        { title: 'You are what you eat',                                                                                                     dur: '20 mins', size: '23.2 MB', url: 'https://lh3.googleusercontent.com/d/1ujygkSU6yTeJqBnXmmGGsu-BlZWS3ZN4', thumb: 'https://lh3.googleusercontent.com/d/1iJYfS2r958bqrK01BSlUDTIMrekYHc7p' },
        { title: 'Identifying unhealthy eating pattern and triggers',                                                                        dur: '24 mins', size: '27 MB',   url: 'https://lh3.googleusercontent.com/d/10hy5gT5MwVYtpkUjxxEWlEqo4duJKGoM', thumb: 'https://lh3.googleusercontent.com/d/1TYPPyPhafQ3AeCNtsSpfQSd305XSB0Go' },
        { title: 'Cultivating a positive attitude',                                                                                          dur: '23 mins', size: '26.4 MB', url: 'https://lh3.googleusercontent.com/d/1lIIiGRM4Z_oxJdNaLB0_GgSEeBj0s0hi', thumb: 'https://lh3.googleusercontent.com/d/1JB17qJWVmgY4d-3nrBAQI-otPWzCicyv' },
        { title: 'Mindful eating empowerment',                                                                                               dur: '22 mins', size: '25.3 MB', url: 'https://lh3.googleusercontent.com/d/1ObP5JaLFaAAExxZvxDI2Jyf13eOECiMK', thumb: 'https://lh3.googleusercontent.com/d/1KZIt-er9e6Nv8Vj-q9_OZQF1PU8UySTx' },
        { title: 'Letting go of unhealthy habits',                                                                                           dur: '23 mins', size: '26.2 MB', url: 'https://lh3.googleusercontent.com/d/1U23iYAYhSm4kAhw04Pp1PAtGPExIh-YX', thumb: 'https://lh3.googleusercontent.com/d/1KXBNYu6ObvQ-x8S-RV_NCQqDqDxJ5rWn' },
        { title: 'Program your mind for weight loss success',                                                                                dur: '22 mins', size: '25.2 MB', url: 'https://lh3.googleusercontent.com/d/1U9kuQ4Y8d_ADLAtoXp5yIZ5enuBgzWzZ', thumb: 'https://lh3.googleusercontent.com/d/16CMiyzKABnyHCzhyrd1A5DJekL51sOTo' },
        { title: 'Session Hypnozio drink more water consistently - Cultivate a mindset that keeps you hydrated and working at its best',    dur: '21 mins', size: '24.3 MB', url: 'https://lh3.googleusercontent.com/d/1QUn7cJBFJLieC4oYBeOWd-tf4_lMewl8', thumb: 'https://lh3.googleusercontent.com/d/1jChHC8n0EoEV-fMV1-6whhsOj8M1QOev' },
        { title: 'Session Hypnozio Healthy Relationship with Food - Transform how you relate to food so that you succeed in losing weight',  dur: '22 mins', size: '25.7 MB', url: 'https://lh3.googleusercontent.com/d/1CNxPtIkU0UnrS5_moWToe9rfiVV5oKyz', thumb: 'https://lh3.googleusercontent.com/d/17_vU6RUofXLV4KHZjCFYwd6Ou-7RgZzm' },
        { title: 'Session Hypnozio Keep a Healthy Diet Plan - Maintain your focus and stay on track towards your weight loss success',       dur: '22 mins', size: '24.8 MB', url: 'https://lh3.googleusercontent.com/d/1_wMMjwAT5Rs2qLb3pp_1JYdbNBeIVm_Q', thumb: 'https://lh3.googleusercontent.com/d/1wRZURs91RmUAYvJ9-weLg_gPg2PG7AlS' },
        { title: 'Session Hypnozio Mission Statement - Mindset is everything_Program your mind for success',                                dur: '23 mins', size: '26 MB',   url: 'https://lh3.googleusercontent.com/d/1Qr_SBykREUvGD6A9x-aDe7S3tjtkVTgd', thumb: 'https://lh3.googleusercontent.com/d/12NR3oMVhs0QvbcrlyQcKZFzTbHKXfKzM' },
        { title: 'Mind shift (female)',                                                                                                      dur: '19 mins', size: '25.6 MB', url: 'https://lh3.googleusercontent.com/d/1Bq5VJwEqLJDcCHPqA_5Zt_TtxDW95Is4', thumb: 'https://lh3.googleusercontent.com/d/1v7hVr8v6o38X_6zKHVfubTj9hIFvS48Z' },
        { title: 'Routine formation (female)',                                                                                               dur: '17 mins', size: '23.3 MB', url: 'https://lh3.googleusercontent.com/d/1wWTIii-Q-yvb5G_YKBTvmUVsg1X6vsJy', thumb: 'https://lh3.googleusercontent.com/d/1ahp97JhU2gWJQnFVhWlNhXlMHKBWvK57' },
        { title: 'Positive practices (female)',                                                                                              dur: '18 mins', size: '24.7 MB', url: 'https://lh3.googleusercontent.com/d/1FbNcis-ffwe2tjXkrrvNgCftv7Zjo7gU', thumb: 'https://lh3.googleusercontent.com/d/1Udt-7RWepj2SlOOHQw2dV2jzRTc8Zpz3' },
        { title: 'View transformation (female)',                                                                                             dur: '16 mins', size: '21.3 MB', url: 'https://lh3.googleusercontent.com/d/1oSAKDfy72qNpwx6lIMBnLGbFJufXRiGD', thumb: 'https://lh3.googleusercontent.com/d/1YFnWMysqH3RxSdT4l0nGbtOBPk7VlXe1' },
        { title: 'Overcome binge eating (female)',                                                                                           dur: '16 mins', size: '22.4 MB', url: 'https://lh3.googleusercontent.com/d/1IK_vRwQ3FHNJgObjfaaKmaqBLXL3C49c', thumb: 'https://lh3.googleusercontent.com/d/1zsvgSifIpL3EwG-VYD7BR368LtIsiOm6' },
        { title: 'Calorie awareness (female)',                                                                                               dur: '17 mins', size: '23.1 MB', url: 'https://lh3.googleusercontent.com/d/1VQ4VH2qWt0doB62jMQKUhI5bMgdOy-KI', thumb: 'https://lh3.googleusercontent.com/d/1Aein1bMw23RFtf-0mOBBXdHJjst7RmyN' },
        { title: 'Water discipline (female)',                                                                                                dur: '17 mins', size: '23.8 MB', url: 'https://lh3.googleusercontent.com/d/1hn65ifNIFE7IKjUopz-KNi5mp_kZaNcP', thumb: 'https://lh3.googleusercontent.com/d/1aEYo30g5WfrWXNByWpkBciUjdgjRNzFw' },
        { title: 'Nourish yourself (female)',                                                                                                dur: '17 mins', size: '23.3 MB', url: 'https://lh3.googleusercontent.com/d/1ZlabPEc4edSb4v9j84tx9tBPT3KkQq-x', thumb: 'https://lh3.googleusercontent.com/d/1bW3gXDKnzJeu4q8271NR-rA6BXdgBxnu' },
        { title: 'Nutritious routine (female)',                                                                                              dur: '19 mins', size: '25.4 MB', url: 'https://lh3.googleusercontent.com/d/16p2oBHJfXT8CRYPgjr5ImvOUHoDWm5t3', thumb: 'https://lh3.googleusercontent.com/d/1gMXfb1mGYGg6u-3I2Fll2BGHr_P3SEUr' },
        { title: 'Wellness Commitment (female)',                                                                                             dur: '15 mins', size: '20.8 MB', url: 'https://lh3.googleusercontent.com/d/1C1DDQDn9ekNb33Auord_UL5-7wdd2Idm', thumb: 'https://lh3.googleusercontent.com/d/1fcB9faCpzcmSRqWk_WaXvYR8Wo629c4R' },
        { title: 'Introduction to Virtual Gastric Bypass',                                                                                  dur: '21 mins', size: '19.2 MB', url: 'https://lh3.googleusercontent.com/d/1hHTCtZDr-kv1LmZy-tTXdFGBUnHW6ina', thumb: 'https://lh3.googleusercontent.com/d/1e60xkEH8EKeTul_yQUmCRL8U-N7dM_Wc' },
        { title: 'Virtual Gastric Bypass Pre-Op',                                                                                           dur: '16 mins', size: '15 MB',   url: 'https://lh3.googleusercontent.com/d/1MMC06X9kezpFE4jaFwPBRQBGi3NU-l9l', thumb: 'https://lh3.googleusercontent.com/d/1Tn_l_Sv4_L-bcAgLzf93QTZFIYcrdOTu' },
        { title: 'Virtual Gastric Bypass Surgery',                                                                                          dur: '17 mins', size: '16 MB',   url: 'https://lh3.googleusercontent.com/d/1GLOyF9qNLQN5vylAgIUAuMhGg8oLirji', thumb: 'https://lh3.googleusercontent.com/d/1uXW-5tdWfjIka64bD4v3Ff5gCcTuQuC-' },
        { title: 'Supporting you during the post-operative phase',                                                                          dur: '20 mins', size: '18.1 MB', url: 'https://lh3.googleusercontent.com/d/14XP4HUd2qibwxuyzzSM3-brpW433q-Fh', thumb: 'https://lh3.googleusercontent.com/d/1uiMYi1FJbn1JvHlB5C0s0rj-Q-oDj5rp' },
        { title: 'Reinforcing healthy eating habits',                                                                                       dur: '20 mins', size: '18.2 MB', url: 'https://lh3.googleusercontent.com/d/1BwfPR0yRwsmDR46N8hr5v3ME_fh5w9oY', thumb: 'https://lh3.googleusercontent.com/d/1YCKwfYaFTTBa4pv6ASOhDknnxViCoGoH' },
        { title: 'Craving Control',                                                                                                         dur: '16 mins', size: '14.9 MB', url: 'https://lh3.googleusercontent.com/d/1pipti2nxEmrj2crTc6xzmTnyJWRh0PYs', thumb: 'https://lh3.googleusercontent.com/d/1eZlCVm9orFKUYFqqOpdlFAu4sjXIKzmz' },
        { title: 'Celebrate your body confidence',                                                                                          dur: '20 mins', size: '18 MB',   url: 'https://lh3.googleusercontent.com/d/1OQ4XYHUQq0egN250lf9mvm8_OC85lwed', thumb: 'https://lh3.googleusercontent.com/d/1ck-rCHgpdpN1pVLbS28mILoxWMcR4KGW' },
        { title: 'Maintenance and Long-Term Success',                                                                                       dur: '19 mins', size: '17.8 MB', url: 'https://lh3.googleusercontent.com/d/1e7oRf1rMCXkVMj3C6vSXeQDscPCCAudq', thumb: 'https://lh3.googleusercontent.com/d/1wKUemxA8SxJDjgIVNHfAvyJglPF9Vxxm' },
        { title: 'Managing stress after operation',                                                                                         dur: '21 mins', size: '19.5 MB', url: 'https://lh3.googleusercontent.com/d/1q7gHNz4UlQleD3F67_7_76jzCGNpl5oe', thumb: 'https://lh3.googleusercontent.com/d/1rRej0dkkhuvXk8uR2HvaohbEgqipU3ju' },
        { title: 'Visualization of Success',                                                                                                dur: '17 mins', size: '15.6 MB', url: 'https://lh3.googleusercontent.com/d/1QAR6USbrAw9rHdq6DA_NXC9GU1KRTyiJ', thumb: 'https://lh3.googleusercontent.com/d/1d5I1FlVZRi-Y5AGTjptv7XbyX-_OeW_n' },
        { title: 'Understanding Triggers',                                                                                                  dur: '18 mins', size: '16.4 MB', url: 'https://lh3.googleusercontent.com/d/1GKM7qzla0D7idj_ZRFlvv7Q42YHoyMy9', thumb: 'https://lh3.googleusercontent.com/d/1WVM4Tym4-70kliE2rXwkfm089efHfQ-i' },
        { title: 'Change in Eating Behaviours',                                                                                             dur: '10 mins', size: '9.1 MB',  url: 'https://lh3.googleusercontent.com/d/1Twoivt3zu93rqCIR_J-a-FS4j83Vxs_J', thumb: 'https://lh3.googleusercontent.com/d/1QGkB0smSrqNESspfN7fpbpSkXTzVZafW' },
        { title: 'Understanding Impulses',                                                                                                  dur: '14 mins', size: '12.4 MB', url: 'https://lh3.googleusercontent.com/d/1qWGzJ5xJMDxwWj3g_HpFPuSki0NPsmv8', thumb: 'https://lh3.googleusercontent.com/d/1idn7ugvIiYvJCcRua5WWd4QcUmYQfeNS' },
        { title: 'Emotional Eating',                                                                                                        dur: '15 mins', size: '13.7 MB', url: 'https://lh3.googleusercontent.com/d/1B_EwzDaZDO0t8dsX7EBzZsJAitChFuKv', thumb: 'https://lh3.googleusercontent.com/d/1qvR2pfUNoJeZGhI4g3JH8k_TrQMiFrtz' },
        { title: 'Reducing stress and anxiety',                                                                                             dur: '12 mins', size: '11.2 MB', url: 'https://lh3.googleusercontent.com/d/1K3NcqTvyp_gF2quOXClYOiFAq4V0WXHb', thumb: 'https://lh3.googleusercontent.com/d/19ofRRuI6ugIfqdybRleXh7IMDfkbHEsO' },
      ],
      de: [
        { title: 'Gewichtsverlust Einführung',        dur: '22 min', size: '— MB', url: '#' },
        { title: 'Kalorienverbrennung Boost',          dur: '18 min', size: '— MB', url: '#' },
        { title: 'Gesunde Ernährung',                  dur: '25 min', size: '— MB', url: '#' },
        { title: 'Motivations-Booster',                dur: '20 min', size: '— MB', url: '#' },
        { title: 'Tiefenentspannung & Abnehmen',       dur: '30 min', size: '— MB', url: '#' },
      ],
      fr: [
        { title: 'Introduction à la perte de poids',  dur: '22 min', size: '— MB', url: '#' },
        { title: 'Brûleur de graisses intensif',       dur: '18 min', size: '— MB', url: '#' },
        { title: 'Alimentation saine & consciente',    dur: '25 min', size: '— MB', url: '#' },
        { title: 'Motivation & confiance en soi',      dur: '20 min', size: '— MB', url: '#' },
        { title: 'Relaxation profonde & minceur',      dur: '30 min', size: '— MB', url: '#' },
      ],
      it: [
        { title: 'Introduzione alla perdita di peso',  dur: '22 min', size: '— MB', url: '#' },
        { title: 'Bruciagrassi intenso',               dur: '18 min', size: '— MB', url: '#' },
        { title: 'Alimentazione consapevole',          dur: '25 min', size: '— MB', url: '#' },
        { title: 'Motivazione & fiducia',              dur: '20 min', size: '— MB', url: '#' },
        { title: 'Rilassamento profondo & dimagrire',  dur: '30 min', size: '— MB', url: '#' },
      ]
    }
  },
  {
    name: 'Deep Relaxation Session', icon: 'fa-cloud-moon',
    programs: {
      en: [
        { title: 'Relaxation Fundamentals',           dur: '20 min', size: '— MB', url: '#' },
        { title: 'Deep Sleep & Recovery',              dur: '35 min', size: '— MB', url: '#' },
        { title: 'Breathing Exercises for Calm',       dur: '15 min', size: '— MB', url: '#' },
        { title: 'Releasing Stress & Letting Go',      dur: '28 min', size: '— MB', url: '#' },
        { title: 'Inner Peace & Stillness',            dur: '25 min', size: '— MB', url: '#' },
      ],
      de: [
        { title: 'Tiefenentspannung Grundlagen',       dur: '20 min', size: '— MB', url: '#' },
        { title: 'Schlaf & Erholung',                  dur: '35 min', size: '— MB', url: '#' },
        { title: 'Atemübungen für innere Ruhe',         dur: '15 min', size: '— MB', url: '#' },
        { title: 'Stress abbauen & loslassen',          dur: '28 min', size: '— MB', url: '#' },
        { title: 'Innerer Frieden',                    dur: '25 min', size: '— MB', url: '#' },
      ],
      fr: [
        { title: 'Fondamentaux de la relaxation',      dur: '20 min', size: '— MB', url: '#' },
        { title: 'Sommeil profond & réparateur',        dur: '35 min', size: '— MB', url: '#' },
        { title: 'Exercices de respiration douce',      dur: '15 min', size: '— MB', url: '#' },
        { title: 'Libérer le stress & lâcher prise',   dur: '28 min', size: '— MB', url: '#' },
        { title: 'Paix intérieure profonde',            dur: '25 min', size: '— MB', url: '#' },
      ],
      it: [
        { title: 'Fondamenti del rilassamento',        dur: '20 min', size: '— MB', url: '#' },
        { title: 'Sonno profondo & ristoratore',        dur: '35 min', size: '— MB', url: '#' },
        { title: 'Esercizi di respirazione dolce',      dur: '15 min', size: '— MB', url: '#' },
        { title: 'Liberarsi dallo stress',              dur: '28 min', size: '— MB', url: '#' },
        { title: 'Pace interiore profonda',             dur: '25 min', size: '— MB', url: '#' },
      ]
    }
  },
  {
    name: 'Focus & Energy Session', icon: 'fa-seedling',
    programs: {
      en: [
        { title: 'Concentration & Mental Clarity',     dur: '18 min', size: '— MB', url: '#' },
        { title: 'Morning Energy Activation',          dur: '12 min', size: '— MB', url: '#' },
        { title: 'Productivity Flow State',            dur: '22 min', size: '— MB', url: '#' },
        { title: 'Building Mental Strength',           dur: '26 min', size: '— MB', url: '#' },
        { title: 'Evening Regeneration',               dur: '20 min', size: '— MB', url: '#' },
      ],
      de: [
        { title: 'Konzentration & geistige Klarheit',  dur: '18 min', size: '— MB', url: '#' },
        { title: 'Morgenenergie Aktivierung',           dur: '12 min', size: '— MB', url: '#' },
        { title: 'Produktivitäts-Flow',                 dur: '22 min', size: '— MB', url: '#' },
        { title: 'Mentale Stärke aufbauen',             dur: '26 min', size: '— MB', url: '#' },
        { title: 'Abendliche Regeneration',             dur: '20 min', size: '— MB', url: '#' },
      ],
      fr: [
        { title: 'Concentration & clarté mentale',     dur: '18 min', size: '— MB', url: '#' },
        { title: 'Activation énergétique du matin',    dur: '12 min', size: '— MB', url: '#' },
        { title: 'Flow de productivité',               dur: '22 min', size: '— MB', url: '#' },
        { title: 'Construire la force mentale',        dur: '26 min', size: '— MB', url: '#' },
        { title: 'Régénération du soir',               dur: '20 min', size: '— MB', url: '#' },
      ],
      it: [
        { title: 'Concentrazione & chiarezza mentale', dur: '18 min', size: '— MB', url: '#' },
        { title: 'Attivazione energetica mattutina',   dur: '12 min', size: '— MB', url: '#' },
        { title: 'Flusso di produttività',             dur: '22 min', size: '— MB', url: '#' },
        { title: 'Costruire la forza mentale',         dur: '26 min', size: '— MB', url: '#' },
        { title: 'Rigenerazione serale',               dur: '20 min', size: '— MB', url: '#' },
      ]
    }
  }
];

let sessIdx = 0, lang = 'en', selected = new Set(), mini = false;

/* ── SIDEBAR ── */
function toggleSidebar() {
  mini = !mini;
  document.getElementById('sidebar').classList.toggle('mini', mini);
  document.getElementById('main').classList.toggle('wide', mini);
  document.getElementById('tab-icon').className = mini ? 'fa-solid fa-chevron-right' : 'fa-solid fa-chevron-left';
}
function openMobile()  { document.getElementById('sidebar').classList.add('mobile-open'); document.getElementById('overlay').classList.add('show'); }
function closeMobile() { document.getElementById('sidebar').classList.remove('mobile-open'); document.getElementById('overlay').classList.remove('show'); }

/* ── SESSION ── */
function selectSess(idx, el) {
  sessIdx = idx; selected.clear();
  document.querySelectorAll('.sb-item[data-idx]').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  closeMobile(); render();
}

/* ── LANGUAGE ── */
function buildLangOpts() {
  const c = document.getElementById('lang-opts-container');
  c.innerHTML = '';
  LANGUAGES.forEach(l => {
    const div = document.createElement('div');
    div.className = 'lang-opt' + (l.code === lang ? ' active' : '');
    div.innerHTML = `<span class="lang-opt-code">${l.code.toUpperCase()}</span><span class="lang-opt-name">${l.label}</span><i class="fa-solid fa-check lang-opt-check"></i>`;
    div.onclick = e => { e.stopPropagation(); switchLang(l.code); };
    c.appendChild(div);
  });
}
function toggleLangPopover(e) {
  e.stopPropagation();
  const pop = document.getElementById('lang-popover');
  const btn = document.getElementById('lang-globe-btn');
  const isOpen = pop.classList.contains('open');
  closeLangPopover();
  if (!isOpen) { buildLangOpts(); pop.classList.add('open'); btn.classList.add('open'); }
}
function closeLangPopover() {
  document.getElementById('lang-popover').classList.remove('open');
  document.getElementById('lang-globe-btn').classList.remove('open');
}
document.addEventListener('click', e => {
  if (!document.getElementById('lang-wrap').contains(e.target)) closeLangPopover();
  document.querySelectorAll('.card-info-popup.open').forEach(p => p.classList.remove('open'));
});
function switchLang(code) {
  lang = code; selected.clear(); closeLangPopover();
  document.getElementById('lang-current-code').textContent = code.toUpperCase();
  render();
}

/* ── RENDER ── */
function render() {
  const s         = DATA[sessIdx];
  const progs     = s.programs[lang] || s.programs['en'];
  const langLabel = LANGUAGES.find(l => l.code === lang)?.label || lang;

  document.getElementById('tb-icon').innerHTML    = `<i class="fa-solid ${s.icon}"></i>`;
  document.getElementById('tb-title').textContent = s.name;

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  progs.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card' + (selected.has(i) ? ' selected' : '');
    card.onclick = () => toggleCard(i, card);

    const esc = str => str.replace(/"/g,'&quot;').replace(/'/g,'&#39;');

    card.innerHTML = `
      <div class="card-inner">
        <!-- Checkbox: circular, appears on hover/selected -->
        <div class="card-cb"><i class="fa-solid fa-check"></i></div>

        <!-- Info button: appears on hover/selected -->
        <div class="card-info-btn" onclick="toggleInfoPopup(event,this)">
          <i class="fa-solid fa-info"></i>
        </div>

        <!-- Info popup: full title + duration + file size -->
        <div class="card-info-popup">
          <div class="card-info-popup-title">${p.title}</div>
          <div class="card-info-popup-row">
            <i class="fa-regular fa-clock"></i>
            <span>${p.dur}</span>
          </div>
          <div class="card-info-popup-row">
            <i class="fa-solid fa-file-audio"></i>
            <span>${p.size}</span>
          </div>
          <div class="card-info-popup-row">
            <i class="fa-solid fa-globe"></i>
            <span>${langLabel}</span>
          </div>
        </div>

        <!-- Thumbnail: real image when available, gradient fallback otherwise -->
        <div class="card-thumb">
          <div class="card-thumb-bg ${p.thumb ? '' : GRADS[i % 5]}" ${p.thumb ? `style="background-image:url('${p.thumb}');background-size:cover;background-position:center top"` : ''}></div>
          <div class="card-thumb-shimmer"></div>
          ${p.thumb ? '' : `<div class="card-thumb-ico"><i class="fa-solid ${ICONS[i % ICONS.length]}"></i></div>`}
          <div class="card-thumb-shade"></div>
          <div class="card-dur-tag">
            <i class="fa-regular fa-clock"></i> ${p.dur}
          </div>
        </div>

        <!-- Card body: title + download button -->
        <div class="card-body">
          <div class="card-title">${p.title}</div>
          <a href="${p.url}" class="card-dl" target="_blank" rel="noopener"
             onclick="event.stopPropagation(); toast('Downloading: ${esc(p.title)}','success')">
            <i class="fa-solid fa-download"></i> Download
          </a>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  updateUI();
}

/* ── INFO POPUP ── */
function toggleInfoPopup(e, btn) {
  e.stopPropagation();
  const popup   = btn.nextElementSibling;
  const wasOpen = popup.classList.contains('open');
  document.querySelectorAll('.card-info-popup.open').forEach(p => p.classList.remove('open'));
  if (!wasOpen) popup.classList.add('open');
}

/* ── SELECTION ── */
function toggleCard(idx, el) {
  selected.has(idx) ? selected.delete(idx) : selected.add(idx);
  el.classList.toggle('selected', selected.has(idx));
  updateUI();
}
function toggleAll() {
  const total = DATA[sessIdx].programs[lang]?.length || 0;
  if (selected.size === total) {
    selected.clear();
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  } else {
    for (let i = 0; i < total; i++) selected.add(i);
    document.querySelectorAll('.card').forEach(c => c.classList.add('selected'));
  }
  updateUI();
}
function clearSel() {
  selected.clear();
  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  updateUI();
}
function updateUI() {
  const n     = selected.size;
  const total = DATA[sessIdx].programs[lang]?.length || 0;
  document.getElementById('sel-cnt').textContent = n;
  document.getElementById('sel-pill').classList.toggle('show', n > 0);
  document.getElementById('dl-sel-btn').disabled = n === 0;
  document.getElementById('clr-btn').style.display = n > 0 ? 'inline-flex' : 'none';
  document.getElementById('sel-all-btn').innerHTML = n === total
    ? '<i class="fa-solid fa-square-xmark"></i> Deselect All'
    : '<i class="fa-regular fa-square-check"></i> Select All';
}

/* ── DOWNLOAD ── */
function downloadSel() {
  const progs = DATA[sessIdx].programs[lang];
  const list  = [...selected].map(i => progs[i]);
  fire(list);
  toast(`Downloading ${list.length} program${list.length > 1 ? 's' : ''}…`, 'success');
}
function downloadAll() {
  const progs     = DATA[sessIdx].programs[lang];
  const langLabel = LANGUAGES.find(l => l.code === lang)?.label || lang;
  fire(progs);
  toast(`Downloading all ${progs.length} programs — ${langLabel}`, 'success');
}
function fire(list) {
  list.forEach((p, i) => {
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = p.url; a.target = '_blank'; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    }, i * 380);
  });
}

/* ── TOAST ── */
function toast(msg, type = 'info') {
  const icons = { success: 'fa-circle-check', info: 'fa-circle-info', error: 'fa-triangle-exclamation' };
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<i class="fa-solid ${icons[type] || icons.info} toast-ic"></i> ${msg}`;
  document.getElementById('toasts').appendChild(t);
  setTimeout(() => { t.style.animation = 'tOut .28s var(--ease) forwards'; setTimeout(() => t.remove(), 280); }, 3200);
}

render();