import {create} from 'zustand';

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  source: 'menu' | 'home';
};

type CartState = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number, source: CartItem['source']) => void;
  clearCart: () => void;
  updateQuantity: (id: number, quantity: number, source: CartItem['source']) => void;
  
};

export const useCartStore = create<CartState>(set => ({
  cartItems: [],
  addToCart: item =>
    set(state => {
      const existingItem = state.cartItems.find(
        i => i.id === item.id && i.source === item.source,
      );
      if (existingItem) {
        return {
          cartItems: state.cartItems.map(i =>
            i.id === item.id && i.source === item.source
              ? {...i, quantity: i.quantity + 1}
              : i,
          ),
        };
      }
      return {
        cartItems: [...state.cartItems, {...item, quantity: 1}],
      };
    }),

  removeFromCart: (id, source) =>
    set(state => ({
      cartItems: state.cartItems.filter(
        item => !(item.id === id && item.source === source),
      ),
    })),

  clearCart: () => set({cartItems: []}),

  updateQuantity: (id, quantity, source) =>
    set(state => ({
      cartItems: state.cartItems.map(item =>
        item.id === id && item.source === source
          ? {...item, quantity}
          : item,
      ),
    })),
}));
