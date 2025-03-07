"use client";

import Link from "next/link";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export default function Navbar() {
  const { user, logout, fetchUser } = useAuthStore();

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
            <button onClick={logout} className="ml-4 bg-red-500 px-3 py-1 rounded">Logout</button>
          </div>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )
      }
    </nav>
  );
};