import {create} from 'zustand';

type Item = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  category: {
    hot?: boolean;
    cold?: boolean;
  };
};

type FavoritesStore = {
  favorites: Item[];
  toggleFavorite: (item: Item) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>(set => ({
  favorites: [],
  toggleFavorite: item =>
    set(state => {
      const exists = state.favorites.find(fav => fav.id === item.id);
      if (exists) {
        return {
          favorites: state.favorites.filter(fav => fav.id !== item.id),
        };
      } else {
        return {favorites: [...state.favorites, item]};
      }
    }),
  isFavorite: id =>
    !!useFavoritesStore.getState().favorites.find((item: { id: string; }) => item.id === id),
}));
