import axios from "axios";
import { create } from "zustand";

interface AuthState {
  user: { id: string, username: string, email: string, createdAt: Date } | null;
  fetchUser: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  fetchUser: async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, { withCredentials: true });
      console.log(res.data)
      set({ user: res.data });
    } catch {
      set({ user: null });
    }
  },

  logout: async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {}, { withCredentials: true });
      set({ user: null });
    } catch (error) {
      console.error("Error en logout:", error);
    }
  },
}));