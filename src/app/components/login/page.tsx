"use client";

import { useAuth } from "./authContext";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <Box
      height={200}
      width={200}
      my={4}
      position={"absolute"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      gap={4}
      p={2}
      left={"50%"}
      top={"50%"}
      sx={{ border: "2px solid grey", transform: "translate(-50%, -50%)" }}
    >
      <Button variant="contained" onClick={signInWithGoogle}>
        Login with Google
      </Button>
    </Box>
  );
}
