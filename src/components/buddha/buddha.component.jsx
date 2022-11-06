import { Grid, Card, CardMedia, Container, Typography } from "@mui/material";
import { ReactComponent as LilCurve } from "../../assets/pattern-curved-line-2.svg";
import { ReactComponent as Blur } from "../../assets/pattern-blur.svg";
import aiImg from "../../assets/ai.jpg";
import "./buddha.styles.css";

const Buddha = () => {
  return (
    <>
      <Container maxWidth="lg">
        <CardMedia
          component="img"
          image={aiImg}
          alt="ai"
          sx={{
            height: "449px",
            width: "auto",
            position: "relative",

            top: { md: "542px", xs: "442px" },
            left: { md: "50px", xs: "0" },
            margin: { xs: "0px auto", md: "0 0" },
            marginTop: { xs: "-442px", md: "-542px" },
            maginLeft: "-5px",

            zIndex: "3",
          }}
        />
      </Container>

      <Container maxWidth="lg">
        <Card>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            rowSpacing={4}
            sx={{
              padding: {
                xs: "50px 16px",
                sm: "50px 58px",
                md: "50px 125px 50px 125px",
              },

              zIndex: 3,
            }}
          >
            <Grid item xs={12} md={5}>
              <div className="blur">
                <Blur />
              </div>
            </Grid>
            <Grid item md={2}>
              <div className="lil-curve">
                <LilCurve />
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography
                variant="h2"
                color="text.secondary"
                sx={{
                  fontWeight: "400",
                  marginBottom: "40px",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Mental Health is real .
              </Typography>
              <Typography variant="subtitle1" sx={{ marginBottom: "40px" }}>
                "You, yourself, as much as anybody in the entire universe,
                deserve your love and affection."
              </Typography>
              <Typography
                variant="h3"
                color="text.secondary"
                sx={{
                  textTransform: "uppercase",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Buddha
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default Buddha;
