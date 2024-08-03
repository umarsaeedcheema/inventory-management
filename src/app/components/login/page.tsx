"use client";

import { useAuth } from "./authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";

const LoginPage = () => {
  const { user, signInWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/components/inventory");
    }
  }, [user, router]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login Page
      </Typography>
      <Button variant="contained" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
    </Box>
  );
};

export default LoginPage;
