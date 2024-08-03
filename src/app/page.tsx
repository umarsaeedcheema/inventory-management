import Navbar from "./components/navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Button, Link, Typography, Container, Grid } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function Home() {
  return (
    <main>
      <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        <Navbar />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              pt: 8,
            }}
          >
            <Paper
              elevation={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: 600,
                height: "30%",
                mb: 4,
                p: 2,
                bgcolor: "#1976d2",
                color: "#fff",
              }}
            >
              <Typography variant="h4">Welcome to Inventory Tracker</Typography>
            </Paper>

            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={6}
                  sx={{
                    bgcolor: "#fff",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <ListAltIcon sx={{ fontSize: 40, color: "#1976d2" }} />
                  <Typography variant="h6" gutterBottom>
                    Keep Track of Items
                  </Typography>
                  <Typography variant="body1">
                    Efficiently manage and keep track of all your inventory
                    items with ease.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={6}
                  sx={{
                    bgcolor: "#fff",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <RestaurantIcon sx={{ fontSize: 40, color: "#1976d2" }} />
                  <Typography variant="h6" gutterBottom>
                    Generate Recipe
                  </Typography>
                  <Typography variant="body1">
                    Use our AI-powered chat to generate delicious recipes based
                    on your inventory.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={6}
                  sx={{
                    bgcolor: "#fff",
                    padding: 2,
                    borderRadius: 1,
                    boxShadow: 3,
                    textAlign: "center",
                  }}
                >
                  <ThumbUpIcon sx={{ fontSize: 40, color: "#1976d2" }} />
                  <Typography variant="h6" gutterBottom>
                    Easy to Use
                  </Typography>
                  <Typography variant="body1">
                    Our intuitive interface ensures a seamless and user-friendly
                    experience.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              LinkComponent={Link}
              href="/components/inventory"
              sx={{ mt: 4 }}
            >
              Get Started!
            </Button>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
