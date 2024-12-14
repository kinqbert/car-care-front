"use client";

import { register } from "@/api/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await register(email?.toString() || "", password?.toString() || "");

      router.push("/login");
    } catch {
      console.error("Login failed");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Register</button>
      </form>
      <Link href="/login">Login</Link>
    </>
  );
}
