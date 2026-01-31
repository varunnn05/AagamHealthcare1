import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  signup: (data: SignupData) => Promise<boolean>;
  logout: () => void;
}

interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('aagam_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<User | null> => {
    setIsLoading(true);
    try {
      // Mock login - replace with actual API call when backend is connected
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo admin login
      if (email === 'aagamhc1@gmail.com' && password === 'admin123') {
        const adminUser: User = {
          id: 'admin-1',
          email: 'aagamhc1@gmail.com',
          firstName: 'Admin',
          lastName: 'Aagam',
          role: 'admin',
          isVerified: true,
          createdAt: new Date().toISOString(),
        };
        setUser(adminUser);
        localStorage.setItem('aagam_user', JSON.stringify(adminUser));
        return adminUser;
      }
      
      // Demo user login
      if (password === 'user123') {
        const demoUser: User = {
          id: 'user-1',
          email,
          firstName: 'Demo',
          lastName: 'User',
          role: 'user',
          isVerified: true,
          createdAt: new Date().toISOString(),
        };
        setUser(demoUser);
        localStorage.setItem('aagam_user', JSON.stringify(demoUser));
        return demoUser;
      }
      
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: SignupData): Promise<boolean> => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: `user-${Date.now()}`,
        email: data.email,
        phone: data.phone,
        firstName: data.firstName,
        lastName: data.lastName,
        role: 'user',
        isVerified: false,
        createdAt: new Date().toISOString(),
      };
      
      setUser(newUser);
      localStorage.setItem('aagam_user', JSON.stringify(newUser));
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aagam_user');
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        isAdmin,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
