"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useAuth } from "./login/authContext";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const { user, signInWithGoogle, signOut } = useAuth();
  console.log(user);
  const router = useRouter();

  const handleSignin = async () => {
    await signInWithGoogle();
    router.push("/components/inventory");
  };

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "20px" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Inventory Tracker
        </Typography>
        {user ? (
          <Box sx={{ display: "flex" }}>
            <Typography variant="h6" sx={{ marginRight: "10px" }}>
              {user.displayName}
            </Typography>
            <Button color="inherit" onClick={handleSignOut}>
              Logout
            </Button>
          </Box>
        ) : (
          <Button color="inherit" onClick={handleSignin}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
