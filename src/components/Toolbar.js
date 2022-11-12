import React from "react";
import "./sidebar.css";

const Toolbar = () => {
  return (
    <div className="tool-bar">
      <div className="burger">
        <i className="ri-menu-line"></i>
      </div>
      <div className="title"> Doctor Dashboard</div>
    </div>
  );
};

export default Toolbar;
