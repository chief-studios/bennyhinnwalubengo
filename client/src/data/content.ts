import type { NavItem, PodcastEpisode, MediaPartner, SpeakingTopic } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Speak', href: '#speak' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Book', href: '#book' },
];

export const TRUST_PARTNERS: MediaPartner[] = [
  { name: 'Switch TV', role: 'Broadcasting Partner' },
  { name: 'KTN', role: 'National Television' },
  { name: 'Elevate TV', role: 'Youth & Leadership Media' },
  { name: 'PLO Lumumba Foundation', role: 'Brand Ambassadorship' },
  { name: 'Daystar University', role: 'Academic & Oratory Forum' },
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'ep-01',
    number: 'EP. 01',
    category: 'Communication',
    title: 'Mastery of Words',
    duration: '42 min listen',
    description:
      'The architecture of spoken authority. Bennyhinn explores how precision in speech shapes public conviction, negotiation leverage, and institutional trust.',
    imageUrl:
      'https://images.unsplash.com/photo-1660631228116-b3643559f611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1000',
    imageAlt: 'Microphone setup in an acoustic broadcast studio during recording',
    audioSampleTitle: 'Bennyhinn on The Architecture of Spoken Conviction',
  },
  {
    id: 'ep-02',
    number: 'EP. 02',
    category: 'Leadership',
    title: 'The Discipline of Leadership',
    duration: '42 min listen',
    description:
      'Why true authority is born in unseen crucibles. A deep dive into internal discipline, moral courage, and leading beyond titles in times of friction.',
    imageUrl:
      'https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1000',
    imageAlt: 'Corporate leaders gathered in strategic dialogue around a conference table',
    audioSampleTitle: 'Bennyhinn on Moral Courage and Institutional Discipline',
  },
  {
    id: 'ep-03',
    number: 'EP. 03',
    category: 'Mindset',
    title: 'Becoming Significant',
    duration: '42 min listen',
    description:
      'Moving from successful to consequential. How young African visionaries can build enduring institutions and anchor their lives in multi-generational assignments.',
    imageUrl:
      'https://images.unsplash.com/photo-1694881227503-ddc502d4b4cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1000',
    imageAlt: 'Atmospheric morning silhouette over a modern city skyline',
    audioSampleTitle: 'Bennyhinn on Shifting from Success to Significance',
  },
];

export const SPEAKING_TOPICS: SpeakingTopic[] = [
  {
    number: '01',
    title: 'High-Stakes Oratory & Strategic Persuasion',
    subtitle: 'Executive Communication & Public Conviction',
    description:
      'Master the art of articulate persuasion, executive presence, and communicating critical vision in times of ambiguity and competitive pressure.',
    targetAudience: 'C-Suite Executives, Founders & Public Leaders',
  },
  {
    number: '02',
    title: 'The Discipline of Ethical Leadership',
    subtitle: 'Building Trust In An Age of Cynicism',
    description:
      'Examining the internal architecture of leaders who endure. How moral clarity and organizational accountability become your strongest competitive advantage.',
    targetAudience: 'Corporate Boards, Senior Managers & Government Entities',
  },
  {
    number: '03',
    title: '#Vision 2029: The Generational Assignment',
    subtitle: 'Youth Empowerment & Pan-African Transformation',
    description:
      'An impassioned, data-driven call to mobilize the next generation of builders, entrepreneurs, and civic leaders across the African continent.',
    targetAudience: 'Universities, National Youth Conventions & Global Summits',
  },
];

export const CORE_METRICS = [
  { value: '10M', label: 'Lives Committed', detail: 'Target reach by 2029' },
  { value: '150+', label: 'Keynotes & Lectures', detail: 'Pan-African & Corporate stages' },
  { value: '30k+', label: 'Hinnfluence Community', detail: 'Active podcast & media listeners' },
  { value: 'Top Debater', label: 'Championship Oratory', detail: 'National & regional recognition' },
];
