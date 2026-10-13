export interface NavItem {
  label: string;
  href: string;
}

export interface PodcastEpisode {
  id: string;
  number: string;
  category: string;
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  audioSampleTitle: string;
}

export interface MediaPartner {
  name: string;
  role?: string;
}

export interface SpeakingTopic {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
}
