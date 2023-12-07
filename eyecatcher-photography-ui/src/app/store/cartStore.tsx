import { create } from "zustand";
import { Cart } from "../models/Cart";

interface CartStore {
    cartItems: Cart[];
    total: number;
    addToCart: (item: Cart) => void;
    clearCart: () => void;
  }
  
  const useCartStore = create<CartStore>((set) => ({
    cartItems: [],
    total: 0,
    addToCart: (item) =>
      set((state) => ({
        cartItems: [...state.cartItems, item],
        total: state.total + item.amount * item.quantity,
      })),
    clearCart: () => set({ cartItems: [], total: 0 }),
  }));
  
  export default useCartStore;