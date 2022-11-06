import React from "react";
import { Box, Grid, Link, Typography, Stack } from "@mui/material";

const Footerr = () => {
  return (
    <Box
      sx={{ py: 8 }}
      style={{ backgroundColor: "whitesmoke", marginTop: "2%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ width: "80%" }}
          style={{ marginLeft: "5%" }}
        >
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>
                Product
              </Typography>
              <br />
              <Link underline="hover">Overview</Link>
              <Link underline="hover">Features</Link>

              <Link underline="hover">Releases</Link>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>
                Company
              </Typography>
              <br />
              <Link underline="hover">About Us</Link>

              <Link underline="hover">Careers</Link>
              <Link underline="hover">Contact Us</Link>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>
                Legal
              </Typography>
              <br />
              <Link underline="hover">Cookies Policy</Link>
              <Link underline="hover">Privacy Policy</Link>
              <Link underline="hover">Terms of Service</Link>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack spacing={2}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <br />
              <Link underline="hover">Facebook</Link>
              <Link underline="hover">Twitter</Link>
              <Link underline="hover">Instagram</Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
        <Typography variant="body1">Copyright @Blithe</Typography>
      </Grid>
    </Box>
  );
};

export default Footerr;
