// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import HomeManagement from "./components/dashboard/HomeManagement";
import Devices from "./components/dashboard/Devices";
import MainCharts from "./components/dashboard/MainCharts";
import UserManagement from "./components/dashboard/UserManagement";
import AccountListing from "./components/dashboard/SidebarScreens/AccountListing";
import AccountCreation from "./components/dashboard/SidebarScreens/AccountCreation";

// sidebar
import AppsSideBar from "./pages/dashboard/AppsSideBar";
import OnBoarding from "./pages/dashboard/Sidebar/OnBoarding";

// auth
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import OTPScreen from "./pages/auth/OTPScreen";
import ForgetChangePassword from "./pages/auth/ForgetChangePassword";
import ForgetPassword from "./pages/auth/ForgetPassword";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Auth routes outside of Dashboard */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTPScreen />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route
          path="/forgetchangepassword"
          element={<ForgetChangePassword />}
        />
        <Route path="account-creation" element={<AccountCreation />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Nested routes under Dashboard */}
          <Route path="OnBoarding" element={<OnBoarding />} />
          <Route path="apps" element={<AppsSideBar />} />
          <Route path="homemanagement" element={<HomeManagement />} />
          <Route path="devices" element={<Devices />} />
          <Route path="maincharts" element={<MainCharts />} />
          <Route path="usermanagement" element={<UserManagement />} />
          <Route path="accountlisting" element={<AccountListing />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
