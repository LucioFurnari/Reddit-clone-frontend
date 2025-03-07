"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupSchema } from "./signupSchema";
import ErrorText from "../common/ErrorText";
import axios from "axios";


export default function SignupForm() {
  const [formData, setFormData] = useState({ email: "", username: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<{ email?: string, username?: string, password?: string, confirmPassword?: string, server?: string}>({});
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      console.log(fieldErrors)
      setErrors({ 
        email: fieldErrors.email?.[0],
        username: fieldErrors.username?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
      });
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/signup`,
        {
          email: formData.email,
          username: formData.username,
          password: formData.password
        },
      );
      router.push("/login");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        console.log(error.response.data.error)
        setErrors({ email: error.response.data.error.email, username: error.response.data.error.username, password: error.response.data.error.password, server: error.response.data.error });
      }
  };
  };
  return (
    <form className="p-6 w-96 max-w-96  bg-gray-800 text-white rounded-lg" onSubmit={handleSignup}>
      <h2 className="text-2xl pt-4 pb-4">Signup</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-2 my-4"
      />
      <ErrorText message={errors.email} />
      <input
        name="username"
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="block w-full p-2 my-4"
      />
      <ErrorText message={errors.username} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="block w-full p-2 my-4" 
      />
      <ErrorText message={errors.password} />
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="block w-full p-2 my-4"
      />
      <ErrorText message={errors.confirmPassword} />
      <button type="submit" className="bg-blue-500 my-4 p-2 rounded w-full font-semibold">Signup</button>
      <ErrorText message={errors.server} />
    </form>
  )
};