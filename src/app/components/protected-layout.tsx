"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./login/authContext";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useAuth();
  const router = useRouter();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (initialLoading) {
      setInitialLoading(false);
      if (!user) {
        router.push("/components/login");
      }
    }
  }, [user, initialLoading, router]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
}
