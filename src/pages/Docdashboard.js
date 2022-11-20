import React, { useState } from "react";
import Toolbar from "../components/Toolbar";
import Sidebar from "../components/Sidebar";
import Backdrop from "../components/Backdrop";

const Docdashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevstate) => !prevstate);
  };

  return (
    <div>
      <Toolbar openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
    </div>
  );
};

export default Docdashboard;
