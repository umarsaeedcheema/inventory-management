"use client";
import { useAuth } from "../app/components/login/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Table from "./components/table/table";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/components/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <main>
      <Table />
    </main>
  );
}
