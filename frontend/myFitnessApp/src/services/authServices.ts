// src/services/api/authService.ts
import { UserCredentials, UserProfile } from '../model/userModels';
import { apiClient } from './api/apiClient';

export const authService = {
  signUp: async (credentials: UserCredentials) => {
    const response = await apiClient.post('/users', credentials);
    return response.data as UserProfile;
  },
  // ... other auth-related calls
};