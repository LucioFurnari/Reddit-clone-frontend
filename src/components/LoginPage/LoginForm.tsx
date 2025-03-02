import axios from "axios"
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPasswrord] = useState("");
  const { login } = useAuthStore();
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        { username, password },
        { withCredentials: true }
      );

      login(res.data.user);
      router.push("/");
    } catch (error) {
      console.error("Login failed", error);
    };
  }

  return (
    <form className="p-6 bg-gray-800 text-white rounded-lg" onSubmit={handleLogin}>
      <h2 className="text-2xl">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full p-2 my-2 text-black"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPasswrord(e.target.value)}
        className="block w-full p-2 my-2 text-black"
      />
      <button type="submit" className="bg-blue-500 p-2 rounded w-full">Login</button>
    </form>
  )
};