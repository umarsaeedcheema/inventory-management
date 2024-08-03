import Navbar from "./components/navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Link, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }}>
        <Navbar />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Paper
            elevation={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              height: "30%",
              marginBottom: 4,
            }}
          >
            <Typography variant="h4">Welcome to Inventory Tracker</Typography>
          </Paper>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "80%",
            }}
          >
            <Paper
              elevation={6}
              sx={{
                bgcolor: "#fff",
                padding: 2,
                borderRadius: 1,
                boxShadow: 3,
                flex: 1,
                margin: 1,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Feature 1
              </Typography>
              <Typography variant="body1">Description of Feature 1.</Typography>
            </Paper>
            <Paper
              elevation={6}
              sx={{
                bgcolor: "#fff",
                padding: 2,
                borderRadius: 1,
                boxShadow: 3,
                flex: 1,
                margin: 1,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Feature 2
              </Typography>
              <Typography variant="body1">Description of Feature 2.</Typography>
            </Paper>
            <Paper
              elevation={6}
              sx={{
                bgcolor: "#fff",
                padding: 2,
                borderRadius: 1,
                boxShadow: 3,
                flex: 1,
                margin: 1,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Feature 3
              </Typography>
              <Typography variant="body1">Description of Feature 3.</Typography>
            </Paper>
          </Box>
          <Button
            variant="contained"
            LinkComponent={Link}
            href="/components/inventory"
          >
            Get Started!
          </Button>
        </Box>
      </Box>
    </main>
  );
}
