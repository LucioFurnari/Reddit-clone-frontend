import { create } from "zustand";

interface AuthState {
  user: { id: string, username: string } | null;
  login: (user: { id: string, username: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user}),
  logout: () => set({ user: null}),
}));