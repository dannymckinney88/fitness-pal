// src/models/userModels.ts
export interface UserCredentials {
    email: string;
    password: string;
    username: string;
    // Include other credential fields that your API expects
  }
  
  export interface UserProfile {
    id: string;
    email: string;
    // Include other profile fields that are returned by your API
  }
  