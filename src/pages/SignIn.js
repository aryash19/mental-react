import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavB from "../components/navbarr";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footerr from "../components/fotter/footerr";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
const [loginEmail, setloginEmail] = useState("");
const[loginPassword, setloginPassword] = useState("");
const login = async () =>{try{
  const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
  console.log(user);
 } catch (error) {
   
   console.log(error.message);
 }};
  return (
    <ThemeProvider theme={theme}>
      <NavB />

      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper elevation="5" sx={{ my: { xs: 4, md: 4 }, p: { xs: 2, md: 4 } }}>
          <Box
            sx={{
              marginTop: 4,
              marginLeft: 3,
              marginRight: 3,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/login">
              <Typography component="h1" variant="h4">
                Log In
              </Typography>
            </Link>
            <Box
              component="form"
              onSubmit={handleSubmit}
              Validate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(event)=> {setloginEmail(event.target.value);}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event)=> {setloginPassword(event.target.value);}}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link style={{ textDecoration: "none" }} to="/process">
                <Button
                onClick={login}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Link>
              <Grid container>
                <Grid item xs>
                  <Link to="/" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footerr />
    </ThemeProvider>
  );
}
