import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="top-right">
          <span className="logo">lamaData</span>
        </div>
        <div className="top-left">Left</div>
      </div>
    </div>
  );
};

export default Topbar;
