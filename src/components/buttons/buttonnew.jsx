import { StyledButtonSecondary } from "./button-secondary.styles";
import { Link } from "react-router-dom";

const ButtonNeww = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/">
      <StyledButtonSecondary
        component="Link"
        to="/"
        variant="outlined"
        sx={{
          padding: { xs: "12px 16px", sm: "12px 24px" },
          fontSize: { xs: "12px", sm: "16px" },
        }}
      >
        Home
      </StyledButtonSecondary>
    </Link>
  );
};

export default ButtonNeww;
