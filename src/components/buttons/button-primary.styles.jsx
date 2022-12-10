import { Button } from "@mui/material";
import styled from "@emotion/styled";

export const StyledButtonPrimary = styled(Button)({
  borderRadius: "6px",
  padding: "15px 31px",
  backgroundImage: "none",
  transition: "all .3s",

  "&:hover": {
    color: "white",
    backgroundColor: "#172339",
  },
});
