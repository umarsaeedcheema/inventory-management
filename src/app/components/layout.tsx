import Navbar from "./navbar";
import { Box } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box sx={{ bgcolor: "#cfe8fc" }}>
      <Navbar />
      {children}
    </Box>
  );
}
