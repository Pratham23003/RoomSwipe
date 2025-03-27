import { createContext, useContext, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentUser({
        id: '1',
        name: 'Test User',
        email: email,
        preferences: {
          budget: { min: 0, max: 0 },
          location: '',
          moveInDate: new Date(),
          sleepSchedule: 'flexible',
          smoking: false,
          drinking: false,
          pets: false,
          guests: 'occasional',
          cleaning: 'weekly',
          interests: []
        },
        createdAt: new Date(),
        updatedAt: new Date()
      });
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentUser({
        id: '1',
        name: 'Test User',
        email: email,
        preferences: {
          budget: { min: 0, max: 0 },
          location: '',
          moveInDate: new Date(),
          sleepSchedule: 'flexible',
          smoking: false,
          drinking: false,
          pets: false,
          guests: 'occasional',
          cleaning: 'weekly',
          interests: []
        },
        createdAt: new Date(),
        updatedAt: new Date()
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    currentUser,
    loading,
    signIn,
    signUp,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 