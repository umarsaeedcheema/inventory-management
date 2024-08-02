"use client";
import { useAuth } from "../app/components/login/authContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Table from "./components/table/table";
import { Button } from "@mui/material";

export default function Home() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      router.push("/components/login");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    setLoggedIn(false);
    router.push("/components/login");
  };

  return (
    <main>
      {loggedIn && (
        <Button
          sx={{ position: "absolute", left: "90%" }}
          variant="contained"
          color="primary"
          onClick={handleSignOut}
        >
          Logout
        </Button>
      )}
      <Table />
    </main>
  );
}
