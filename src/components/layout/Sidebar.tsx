// Sidebar.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaHome } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoApps } from "react-icons/io5";
import { trepdash } from "../../assets/images"; // Import image assets
import { MdPhonelinkSetup } from "react-icons/md";
import { RiTableFill } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../styles/components/layout/Sidebar.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate(); // Create a navigate function
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // New state

  const toggleDropdown = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setActiveMenu(menu); // Set active menu item
  };
  const handleAppsClick = () => {
    setActiveMenu("Apps"); // Update active menu state
    navigate("/dashboard/apps"); // Navigate to the desired route
  };
  const handleOnBoardingClick = () => {
    setActiveMenu("onBoarding"); // Update active menu state
    navigate("/dashboard/onBoarding"); // Navigate to the desired route
  };
  const handleDashboardClick = () => {
    setActiveMenu("dashboard"); // Update active menu state
    navigate("/dashboard"); // Navigate to the desired route
  };
  return (
    <div className="sidebar">
      <img src={trepdash} alt="modalimage" className="trepdash" />
      <ul className="sidebar-menu">
        <li>
          <div
            onClick={() => {
              toggleDropdown("onBoarding");
              handleOnBoardingClick(); // Call the handleAppsClick function
            }}
            className={`sidebar-link ${
              activeMenu === "onBoarding" ? "active" : ""
            }`} // Add active class
          >
            <RiTableFill
              className={`sidebar-icon ${
                activeMenu === "onBoarding" ? "active-icon" : ""
              }`}
            />
            On Boarding
            <IoMdArrowDropdown
              className={`dropdown-icon ${
                openMenu === "onBoarding" ? "open" : ""
              }`}
            />
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              toggleDropdown("dashboard");
              handleDashboardClick(); // Call the handleAppsClick function
            }}
            className={`sidebar-link ${
              activeMenu === "dashboard" ? "active" : ""
            }`} // Add active class
          >
            <LuLayoutGrid
              className={`sidebar-icon ${
                activeMenu === "dashboard" ? "active-icon" : ""
              }`}
            />
            Dashboard
            <IoMdArrowDropdown
              className={`dropdown-icon ${
                openMenu === "dashboard" ? "open" : ""
              }`}
            />
          </div>
          {openMenu === "dashboard" && (
            <ul className="submenu">
              <li>
                <Link to="/dashboard/maincharts">Chart 1</Link>
              </li>
              <li>
                <Link to="/dashboard/maincharts">Chart 2</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            onClick={() => toggleDropdown("Home")}
            className={`sidebar-link ${activeMenu === "Home" ? "active" : ""}`}
          >
            <FaHome
              className={`sidebar-icon ${
                activeMenu === "Home" ? "active-icon" : ""
              }`}
            />
            Home
            <IoMdArrowDropdown
              className={`dropdown-icon ${openMenu === "Home" ? "open" : ""}`}
            />
          </div>
        </li>

        <li>
          <div
            onClick={() => {
              toggleDropdown("Apps");
              handleAppsClick(); // Call the handleAppsClick function
            }}
            className={`sidebar-link ${activeMenu === "Apps" ? "active" : ""}`}
          >
            <IoApps
              className={`sidebar-icon ${
                activeMenu === "Apps" ? "active-icon" : ""
              }`}
            />
            Apps
          </div>
        </li>
        <li>
          <div
            onClick={() => toggleDropdown("Setup")}
            className={`sidebar-link ${activeMenu === "Setup" ? "active" : ""}`}
          >
            <MdPhonelinkSetup
              className={`sidebar-icon ${
                activeMenu === "Setup" ? "active-icon" : ""
              }`}
            />
            Setup
            <IoMdArrowDropdown
              className={`dropdown-icon ${openMenu === "Setup" ? "open" : ""}`}
            />
          </div>
          {openMenu === "Setup" && (
            <ul className="submenu">
              <li>
                <div className="sidebar-link">
                  <MdDevices className="sidebar-icon" />
                  <Link to="/accountlisting">Account Listing</Link>
                </div>
              </li>
              <li>
                <Link to="/usermanagement">Device User</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            onClick={() => toggleDropdown("Analytics")}
            className={`sidebar-link ${
              activeMenu === "Analytics" ? "active" : ""
            }`}
          >
            <MdAnalytics
              className={`sidebar-icon ${
                activeMenu === "Analytics" ? "active-icon" : ""
              }`}
            />
            Analytics
            <IoMdArrowDropdown
              className={`dropdown-icon ${
                openMenu === "Analytics" ? "open" : ""
              }`}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
