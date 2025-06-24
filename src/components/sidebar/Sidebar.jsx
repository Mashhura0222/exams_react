import React, { useState } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  PiCubeBold,
  PiUserCircle,
  PiWallet,
  PiMegaphone,
  PiQuestion,
} from "react-icons/pi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: open? "80px" : "200px",
       boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",borderRadius:"20px",
        background: "white",
        transition: "0.3s ease",
      }}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          padding: "40px 20px",
        }}
      >
     
        <h2
          onClick={() => setOpen(!open)}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
        >
          <PiCubeBold />
          {!open&& "Dashboard"}
        </h2>

        <ul style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {[
            { path: "/dashboard", icon: <PiCubeBold />, label: "Dashboard" },
            { path: "/product", icon: <AiOutlineProduct />, label: "Product" },
            { path: "/customers", icon: <PiUserCircle />, label: "Customers" },
            { path: "/income", icon: <PiWallet />, label: "Income" },
            { path: "/promote", icon: <PiMegaphone />, label: "Promote" },
            { path: "/help", icon: <PiQuestion />, label: "Help" },
          ].map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  color: isActive ? "#fff" : "rgba(145, 151, 179, 1)",
                  gap: "10px",
                  background: isActive ? "blue" : "transparent",
                  padding: "5px",
                  borderRadius: "8px",
                })}
              >
                {item.icon}
                {!open && <span style={{ fontSize: "20px" }}>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
