// Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/common/Breadcrumb.css"; // Import the CSS file

const Breadcrumb = ({ items }: any) => {
  return (
    <nav className="breadcrumb">
      {items.map((item: any, index: number) => (
        <span
          key={index}
          className={`breadcrumb-item ${item.active ? "active" : ""}`}
        >
          {item.active ? item.label : <Link to={item.path}>{item.label}</Link>}
          {index < items.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
