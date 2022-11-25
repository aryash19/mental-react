import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBarr from "../components/nav-bar2.component";
import Footerr from "../components/fotter/footerr";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [registerEmail, setRegisterEmail] = useState("");
const[registerPassword, setRegisterPassword] = useState("");
const register = async () => {
try{
 const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
 console.log(user);
} catch (error) {
  
  console.log(error.message);
}
};



  return (
    <ThemeProvider theme={theme}>
      <NavBarr />
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
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/signup">
              <Typography component="h1" variant="h4">
                Register
              </Typography>
            </Link>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="userName"
                    required
                    fullWidth
                    id="userName"
                    label="User Name"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event)=> {setRegisterEmail(event.target.value);}}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(event)=> {setRegisterPassword(event.target.value);}}
                  />
                </Grid>
              </Grid>
              <Link style={{ textDecoration: "none" }} to="/process">
                <Button
                onClick={register}
                  type="submit"
                  fullWidth
                  
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Link>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2">
                    Already have an account? Sign in
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
