import React from "react";
import "./Topbar.css";
import { NotificationsNone } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="top-left">
          <span className="logo">
            <pre>lamaData</pre>
          </span>
        </div>
        <div className="top-right">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
