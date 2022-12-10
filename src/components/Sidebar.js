import React from "react";
import "./sidebar.css";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="avatar">
        <Avatar img="../assets/man.png" sx={{ width: 96, height: 96 }} />
      </div>
      <div className="typo">
        <Typography className="typo">Dr.Saurabh Mehrotra</Typography>
      </div>
      <li>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{
              backgroundColor: "#172339",
            }}
          >
            <BookOnlineIcon />
            Your Appointments
          </Button>
        </Link>
      </li>
      <li>
        <Link style={{ textDecoration: "none" }} to="/patientinfo">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{
              backgroundColor: "#172339",
            }}
          >
            <SupervisedUserCircleIcon />
            Patient Information
          </Button>
        </Link>
      </li>
    </div>
  );
};

export default Sidebar;
