import { Container, Grid, Typography } from "@mui/material";
import ButtonSecondary from "./buttons/button-secondary.component";

const NavBar = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "50px 0 100px 0" }}
      >
        <Grid item xs={3.5}>
          <Typography variant="h2">Blithe</Typography>
        </Grid>
        <Grid item container xs={8.5} sx={{ justifyContent: "right" }}>
          <ButtonSecondary />
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
