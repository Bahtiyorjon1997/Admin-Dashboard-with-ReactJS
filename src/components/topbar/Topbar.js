import React from "react";
import "./Topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="top-left">
          <span className="logo">lamaData</span>
        </div>
        <div className="top-right">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageIcon />
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
