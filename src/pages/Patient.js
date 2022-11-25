import React, { useState } from "react";
import Toolbar from "../components/Toolbar";
import Sidebar from "../components/Sidebar";
import Backdrop from "../components/Backdrop";
import Patientinfo from "../components/PatientInfo";
import Footerr from "../components/fotter/footerr";

const Patient = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevstate) => !prevstate);
  };

  return (
    <div>
      <Toolbar openSidebar={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <Patientinfo />
      <Footerr />
    </div>
  );
};

export default Patient;
