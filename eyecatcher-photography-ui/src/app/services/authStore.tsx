import { create } from 'zustand';
import { User } from '../models/User';

interface AuthStoreState {
  user: null | User; // Replace 'User' with your user data type
  token: null | string;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStoreState>((set) => ({
  user: null,
  token: null,

  login: (user: User, token: string) => {
    set({ user, token });
  },

  logout: () => {
    set({ user: null, token: null });
  },
}));

export default useAuthStore;