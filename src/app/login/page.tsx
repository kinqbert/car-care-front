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

    const response = await login(
      email?.toString() || "",
      password?.toString() || ""
    );

    console.log(response);

    if (response.ok) {
      localStorage.setItem("token", response.token);
      setIsAuth(true);
      router.push("/dashboard");
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
