"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const { user, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <nav className="flex justify-around items-center p-4 bg-gray-800 text-white">
      <Link href="/">🏠 Reddit Clone </Link>
      {
        user ? (
          <div>
            <span>👤 {user.username}</span>
            <LogoutButton />
          </div>
        ) : (
          <div>
            <Link className="p-2 hover:bg-slate-500/50 rounded ml-2" href="/login">Login</Link>
            <Link className="p-2 hover:bg-slate-500/50 rounded ml-2" href="/signup">Signup</Link>
          </div>
        )
      }
    </nav>
  );
};