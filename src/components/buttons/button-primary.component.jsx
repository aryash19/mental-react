import { StyledButtonPrimary } from "./button-primary.styles";
import { Link } from "react-router-dom";

const ButtonPrimary = () => {
  return (
    <Link style={{ textDecoration: "none" }} to="/signup">
      <StyledButtonPrimary variant="contained">
        Register Here
      </StyledButtonPrimary>
    </Link>
  );
};

export default ButtonPrimary;
