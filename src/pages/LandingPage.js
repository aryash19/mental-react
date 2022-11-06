import "../App.css";

import { themeOptions } from "../theme";
import { ThemeProvider } from "@mui/material";
import NavBar from "../components/nav-bar.component";
import Hero from "../components/hero/hero.component";
import Buddha from "../components/buddha/buddha.component";
import Footer from "../components/fotter/footer.component";

function LandingPage() {
  return (
    <ThemeProvider theme={themeOptions}>
      <NavBar />
      <Hero />
      <Buddha />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage;
