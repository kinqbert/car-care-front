"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const isAuth = useAuthStore((state) => state.isAuth);

  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, []);

  return <h1>Dashboardf</h1>;
}
