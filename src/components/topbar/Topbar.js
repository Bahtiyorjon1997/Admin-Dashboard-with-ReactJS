import React from "react";
import "./Topbar.css";
import { NotificationsNone } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="top-right">
          <span className="logo">
            <pre>lamaData</pre>
          </span>
        </div>
        <div className="top-left">
          <NotificationsNone />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
