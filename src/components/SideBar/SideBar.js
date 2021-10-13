import React from "react";
import "./SideBar.css";
import {
  LineStyle,
  Timeline,
  People,
  TrendingUp,
  ArrowRightSharp,
} from "@material-ui/icons";

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
              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <Timeline />
              Analytics
              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <People />
              Customer Service
              <ArrowRightSharp />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
