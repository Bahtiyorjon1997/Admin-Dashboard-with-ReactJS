import React from "react";
import "./SideBar.css";
import { LineStyle } from "@material-ui/icons";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3>Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle />
              Home
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
