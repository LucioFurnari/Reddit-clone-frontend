import axios from "axios";
import { create } from "zustand";

interface AuthState {
  user: { id: string, username: string, email: string, createdAt: Date } | null;
  fetchUser: () => Promise<boolean>;
  stateLogout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  fetchUser: async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, { withCredentials: true });

      set({ user: res.data });
      return true;
    } catch {
      set({ user: null });
      return false;
    }
  },

  stateLogout: async () => {
    try {
      set({ user: null });
    } catch (error) {
      console.error("Error en logout:", error);
    }
  },
}));