import axios from "axios"
import React, { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { loginSchema } from "./loginSchema";
import ErrorText from "../common/ErrorText";

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
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        setErrors({ email: error.response.data.error.email, password: error.response.data.error.password, server: error.response.data.error });
      }
    }
  };

  return (
    <form className="p-6 w-96 max-w-96  bg-gray-800 text-white rounded-lg" onSubmit={handleLogin}>
      <h2 className="text-2xl pt-4 pb-4">Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Username"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-2 my-4"
      />
      <ErrorText message={errors.email} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="block w-full p-2 my-4"
      />
      <ErrorText message={errors.password} />
      <button type="submit" className="bg-blue-500 my-4 p-2 rounded w-full font-semibold">Login</button>
      <ErrorText message={errors.server} />
    </form>
  )
};