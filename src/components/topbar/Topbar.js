import React from "react";
import "./Topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="top-left">
          <div className="topBarIconContainer">
            <MenuIcon />
          </div>

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
          <img
            src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
