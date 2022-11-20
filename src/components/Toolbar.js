import React from "react";
import "./sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Toolbar = ({ openSidebar }) => {
  return (
    <div className="tool-bar">
      <div className="menu" onClick={openSidebar}>
        <MenuIcon />
      </div>
      <Grid item xs={3.5}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Typography variant="h5" className="blithe">
            Blithe
          </Typography>
        </Link>
      </Grid>
      <div className="title"> Doctor Dashboard</div>
    </div>
  );
};

export default Toolbar;
