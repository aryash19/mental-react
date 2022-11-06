import { Container, Grid, Typography } from "@mui/material";
import ButtonNeww from "./buttons/buttonnew";
import { Link } from "react-router-dom";

const NavBa = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "50px 0 100px 0" }}
      >
        <Grid item xs={3.5}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography variant="h3" fontFamily="Epilogue">
              Blithe
            </Typography>
          </Link>
        </Grid>
        <Grid item container xs={8.5} sx={{ justifyContent: "right" }}>
          <ButtonNeww />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBa;
