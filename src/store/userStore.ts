import {create} from 'zustand';
import axios from 'axios';

export const useUserStore = create(set => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      set({ users: response.data, isLoading: false });
    } catch (error) {
      console.error('Failed to fetch users:', error);
      set({ error: 'Failed to fetch users', isLoading: false }); 
    }
  },
}));

// Component Mounts
//    ↓
// fetchUsers() call
//    ↓
// API se data aaya
//    ↓
// Store updated (set)
//    ↓
// Component auto re-rendered with users

