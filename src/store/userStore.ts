import {create} from 'zustand';
import axios from 'axios';

const RATE_LIMIT_MS = 60 * 1000;

let lastFetchUsers = 0;
let lastFetchMenu = 0;
let lastFetchMenuItems = 0;

export const useUserStore = create(set => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    const now = Date.now();
    if (now - lastFetchUsers < RATE_LIMIT_MS) {
      return;
    }
    lastFetchUsers = now;

    set({isLoading: true, error: null});
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
    const now = Date.now();
    if (now - lastFetchMenu < RATE_LIMIT_MS) {
      return;
    }
    lastFetchMenu = now;

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

export const useMenu = create(set => ({
  menuItems: [],
  isLoading: false,
  error: null,

  fetchMenuItems: async () => {
    const now = Date.now();
    if (now - lastFetchMenuItems < RATE_LIMIT_MS) {return;}
    lastFetchMenuItems = now;

    set({isLoading: true, error: null});
    try {
      const response = await axios.get('https://dummyjson.com/recipes');
      console.log('erererer', response.data.recipes);

      set({menuItems: response.data.recipes, isLoading: false});
    } catch (error) {
      console.error('Failed to fetch items:', error);
      set({error: 'Failed to fetch items', isLoading: false});
    }
  },
}));
