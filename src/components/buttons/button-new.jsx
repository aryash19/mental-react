import { StyledButtonSecondary } from "./button-secondary.styles";
import { Link } from "react-router-dom";

const ButtonNew = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/login">
      <StyledButtonSecondary
        component="Link"
        to="/login"
        variant="outlined"
        sx={{
          padding: { xs: "12px 16px", sm: "12px 24px" },
          fontSize: { xs: "12px", sm: "16px" },
        }}
      >
        Log In
      </StyledButtonSecondary>
    </Link>
  );
};

export default ButtonNew;
