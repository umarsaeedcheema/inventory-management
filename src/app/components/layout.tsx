import Navbar from "./navbar";
import { Box } from "@mui/material";
import ProtectedLayout from "./protected-layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ProtectedLayout>
      <Box sx={{ bgcolor: "#cfe8fc" }}>
        <Navbar />
        {children}
      </Box>
    </ProtectedLayout>
  );
}
