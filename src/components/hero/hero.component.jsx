import { Container, Grid, CardMedia, Typography } from "@mui/material";
import ButtonPrimary from "../buttons/button-primary.component";
import "./hero.styles.css";
import heroImage from "../../assets/mh1.png";

const Hero = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: { xs: "100px" } }}>
      <Grid container>
        <Grid
          item
          md={10}
          sm={12}
          xs={12}
          sx={{
            marginBottom: { xs: "50px", sm: "100px", md: "36px" },
            padding: { md: "80px 0", sm: "20px 0" },
            backgroundImage: { xs: "none", sm: `url(${heroImage})` },
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: { sm: "400px", md: "524px" },
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "38px", sm: "56px", md: "52px" } }}
          >
            Let&apos;s Make this <strong>earth</strong> <br /> a better
            <strong> place.</strong>
          </Typography>
          <div className="hero-p">
            <Typography variant="h3">Talk.Resolve.Heal</Typography>
          </div>
          <ButtonPrimary />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: { sm: "none" }, marginBottom: "56px" }}
        >
          <CardMedia component="img" image={heroImage} alt="hero phone" />
        </Grid>
        <Grid
          rowSpacing={4}
          item
          container
          md={1.5}
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{ padding: { md: "100px 0" } }}
        >
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="h5"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              Features
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              1. Mental Health Analyzer
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              2. Mental Health Treatment
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "left", xs: "center" } }}
            >
              3. Mental Health Awareness
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
