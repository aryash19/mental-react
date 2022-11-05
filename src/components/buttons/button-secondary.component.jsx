import { StyledButtonSecondary } from "./button-secondary.styles";
import { Link } from "react-router-dom";

const ButtonSecondary = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/signup">
      <StyledButtonSecondary
        component="Link"
        to="/signup"
        variant="outlined"
        sx={{
          padding: { xs: "12px 16px", sm: "12px 24px" },
          fontSize: { xs: "12px", sm: "16px" },
        }}
      >
        Sign Up
      </StyledButtonSecondary>
    </Link>
  );
};

export default ButtonSecondary;
