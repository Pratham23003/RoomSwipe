export interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
  bio?: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  budget: {
    min: number;
    max: number;
  };
  location: string;
  moveInDate: Date;
  sleepSchedule: 'early' | 'late' | 'flexible';
  smoking: boolean;
  drinking: boolean;
  pets: boolean;
  guests: 'frequent' | 'occasional' | 'rare';
  cleaning: 'daily' | 'weekly' | 'monthly';
  interests: string[];
}

export interface Match {
  id: string;
  users: string[];
  timestamp: Date;
  status: 'pending' | 'accepted' | 'rejected';
  compatibilityScore: number;
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Swipe {
  id: string;
  swiperId: string;
  swipedId: string;
  direction: 'left' | 'right';
  timestamp: Date;
} 