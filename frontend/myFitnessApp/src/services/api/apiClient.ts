// src/services/api/apiClient.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5432', 
  // set up headers that your API requires here.
});

// Optional: could add Axios interceptors for request and response if needed.
