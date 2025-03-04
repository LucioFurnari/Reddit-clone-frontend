import axios from "axios"
import React, { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { loginSchema } from "./loginSchema";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string, password?: string, server?: string}>({});
  const { fetchUser } = useAuthStore();
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({ email: fieldErrors.email?.[0], password: fieldErrors.password?.[0] });
      return;
    }

    try { 
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        formData,
        { withCredentials: true }
      );

      // Fetch user data after successful login
      await fetchUser();
      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.errors) {
        setErrors({ email: error.response.data.errors.email, password: error.response.data.errors.password, server: error.response.data.errors.server  });
      }
    }
  };

  return (
    <form className="p-6 bg-gray-800 text-white rounded-lg" onSubmit={handleLogin}>
      <h2 className="text-2xl">Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Username"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-2 my-2 "
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="block w-full p-2 my-2 "
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      {errors.server && <p className="text-red-500">{errors.server}</p>}
      <button type="submit" className="bg-blue-500 p-2 rounded w-full">Login</button>
    </form>
  )
};