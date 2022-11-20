import { createTheme } from "@mui/material";

// import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#172339",
      light: "#0079ff",
      dark: "#0079ff",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#ffffff",
      paper: "#172339",
    },
    text: {
      secondary: "#faf8f6",
      primary: "#172339",
      disabled: "rgba(254,254,254,0.8)",
    },
  },
  typography: {
    fontFamily: '"Epilogue" , sans-serif',
    h1: {
      fontWeight: 400,
      fontSize: 42,
      lineHeight: 1.08,
      letterSpacing: -1,
    },
    h2: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.16,
    },
    h3: {
      fontSize: 38,
      fontWeight: 400,
      lineHeight: 1.77,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.6,
    },
    h5: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.78,
      letterSpacing: ".1px",
    },
    body2: {
      fontSize: 12,
      lineHeight: 1.62,
      letterSpacing: "2.5px",
      color: "#49566D",
      textTransform: "uppercase",
    },
    body3: {
      fontSize: 36,
      lineHeight: 1.62,
      letterSpacing: "2.5px",
      color: "#49566D",
      textTransform: "uppercase",
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: 1.75,
      fontWeight: 400,
      letterSpacing: ".1px",
      color: "#F3EDE7",
    },
    button: {
      fontSize: 18,
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 15,
  },
});
