import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserProfile, UserCredentials } from '../model/userModels';
import { authService } from '../services/authServices';

interface AuthContextType {
  user: UserProfile | null;
  signUp: (credentials: UserCredentials) => Promise<void>;
}

const initialAuthContext: AuthContextType = {
  user: null,
  signUp: async () => {
    // Initially an empty function. This will be overwritten by the AuthProvider.
  }
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  const signUp = async (credentials: UserCredentials) => {
    try {
      const newUser = await authService.signUp(credentials);
      setUser(newUser);
    } catch (error) {
      // Ideally, you would want to handle the error in a way that the UI can reflect
      // For example, by setting an 'error' state and displaying it
      console.error('Failed to sign up:', error);
      throw error; // Re-throwing the error to be handled by the caller
    }
  };

  // Any other auth methods can be defined and included here as well

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
