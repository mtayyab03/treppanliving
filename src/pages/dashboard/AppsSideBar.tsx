// Sidebar.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaHome } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LuLayoutGrid } from "react-icons/lu";
import { MdViewModule } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { PiDevicesFill } from "react-icons/pi";
import { FaUsersCog } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa6";
import { BsBuildingFillGear } from "react-icons/bs";
import { IoApps } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../styles/pages/sidebar/AppsSideBar.css";

const apps = [
  { icon: <MdManageAccounts />, label: "Account Management" },
  { icon: <MdViewModule />, label: "Modular app Management" },
  { icon: <FaUsersCog />, label: "User Management" },
  { icon: <FaHandshakeSimple />, label: "Vendor Management" },
  { icon: <AiFillProject />, label: "Project Management" },
  { icon: <PiDevicesFill />, label: "Amenities Management" },
  {
    icon: <FaTrophy />,
    label: "Reward Management",
    route: "/dashboard/rewardweightage",
  },
  { icon: <BsBuildingFillGear />, label: "Property Management" },
  // Add more apps if needed
];

const AppsSideBar = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleAppClick = (route: string) => {
    if (route) {
      navigate(route); // Navigate to the specified route
    }
  };
  return (
    <div className="main-apps">
      <div className="main-header-apps">
        <IoApps className="sidebar-icon-apps" />
        <h4>Apps</h4>
      </div>

      <div className="apps-sidebar-container">
        {apps.map((app, index) => (
          <div
            className="app-box"
            key={index}
            onClick={() => handleAppClick(app.route || "")}
          >
            <div className="app-icon">{app.icon}</div>
            <p className="app-label">{app.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsSideBar;
