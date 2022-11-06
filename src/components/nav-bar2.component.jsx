import { Container, Grid, Typography } from "@mui/material";
import ButtonNew from "./buttons/button-new";
import { Link } from "react-router-dom";

const NavBarr = () => {
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
          <ButtonNew />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBarr;
