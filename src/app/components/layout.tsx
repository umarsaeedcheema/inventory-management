"use client";
import Navbar from "./navbar";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import ProtectedLayout from "./protected-layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isExcludedRoute = pathname === "/components/login" || pathname === "/";

  return (
    <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }}>
      <Navbar />
      {isExcludedRoute ? (
        children
      ) : (
        <ProtectedLayout>{children}</ProtectedLayout>
      )}
    </Box>
  );
}
