import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Grid from "../../components/dashboard/Grid";
import Sidebar from "../../components/layout/Sidebar";
import "../../styles/pages/dashboard/dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="layout">
      <div className="layout-content">
        <Sidebar />
      </div>
      <div className="layout-navGrid">
        <Navbar />
        <div className="layout-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
