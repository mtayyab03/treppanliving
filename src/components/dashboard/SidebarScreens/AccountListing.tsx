import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/pages/sidebar/AccountListing.css";
import {
  FaUser,
  FaBuilding,
  FaFlag,
  FaTag,
  FaInfoCircle,
} from "react-icons/fa";
import Breadcrumb from "../../common/Breadcrumb";
import Grid from "../../dashboard/Grid";
const AccountListing = () => {
  const navigate = useNavigate();

  const navigateToAccountCreation = () => {
    navigate("/account-creation");
  };
  const breadcrumbItems = [
    { label: "Account Management", path: "/account-management", active: false },
    { label: "Account Listing", path: "/accountlisting", active: true },
  ];

  const accounts = [
    {
      id: 123,
      companyName: "Hoffor",
      country: "UAE",
      trn: "4345665443",
      status: "Active",
    },
    {
      id: 453,
      companyName: "Trppan",
      country: "Qatar",
      trn: "4345665443",
      status: "Inactive",
    },
    // Add more data as needed
  ];
  return (
    <div className="account-list-main">
      <div className="account-header">
        <Breadcrumb items={breadcrumbItems} />
        <button className="button" onClick={navigateToAccountCreation}>
          Create Account
        </button>
      </div>

      {/* row grid */}
      <Grid />
      {/* <div className="account-grid">
        <div className="grid-header">
          <div className="header-icon">
            <FaUser className="icon" />
            <div>Account ID</div>
          </div>
          <div className="header-icon">
            <FaBuilding className="icon" />
            <div>Company Name</div>
          </div>
          <div className="header-icon">
            <FaFlag className="icon" />
            <div>Country</div>
          </div>
          <div className="header-icon">
            <FaTag className="icon" />
            <div>TRN (VAT#)</div>
          </div>
          <div className="header-icon">
            <FaInfoCircle className="icon" />
            <div>Status</div>
          </div>
          <div className="header-icon">
            <FaInfoCircle className="icon" />
            <div>Details</div>
          </div>
        </div>

        <div className="grid-container">
          {accounts.map((account) => (
            <div className="grid-row" key={account.id}>
              <div>{account.id}</div>
              <div>{account.companyName}</div>
              <div>{account.country}</div>
              <div>{account.trn}</div>
              <div>{account.status}</div>
              <div>
                <button className="more-button">More</button>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AccountListing;
