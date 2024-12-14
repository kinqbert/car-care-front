"use client";

import { login } from "@/api/auth";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await login(
        email?.toString() || "",
        password?.toString() || ""
      );

      setIsAuth(true);

      localStorage.setItem("refresh-token", response.refreshToken);
      localStorage.setItem("access-token", response.accessToken);
      router.push("/dashboard");
    } catch {
      console.error("Login failed");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
