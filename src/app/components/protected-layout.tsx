"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./login/authContext";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
