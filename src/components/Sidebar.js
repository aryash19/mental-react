import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <li>
        <NavLink to="/">
          <HomeIcon />
          Home
        </NavLink>
      </li>
      <li>
        <BookOnlineIcon />
        Your Appointments
      </li>
      <li>
        <SupervisedUserCircleIcon />
        Patient Information
      </li>
    </div>
  );
};

export default Sidebar;
