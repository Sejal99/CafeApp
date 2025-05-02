import {create} from 'zustand';
import axios from 'axios';

export const useUserStore = create(set => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    try {
      const response = await axios.get(
        'https://coffee-shop-api-sandy.vercel.app/api/v1/products',
      );
      set({users: response.data, isLoading: false});
    } catch (error) {
      console.error('Failed to fetch users:', error);
      set({error: 'Failed to fetch users', isLoading: false});
    }
  },
}));

export const useFetchMenu = create(set => ({
  items: [],
  isLoading: false,
  error: null,
  fetchMenu: async () => {
    set({isLoading: true, error: null});
    try {
      const response = await axios.get(
        'https://api.sampleapis.com/coffee/iced',
      );
      console.log('response', response.data);

      set({items: response.data, isLoading: false});
    } catch (error) {
      console.error('Failed to fetch items:', error);
      set({error: 'Failed to fetch items', isLoading: false});
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
