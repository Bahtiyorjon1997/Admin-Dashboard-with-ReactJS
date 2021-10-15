import React from "react";
import ArrowRightSharp from "@material-ui/icons/ArrowRightSharp";

const SideBarItem = ({ id, icon, title, children }) => {
  return (
    <li className="sidebarListItem" id={id}>
      <div className="listWrapper">
        {icon}
        <span className="title">{title}</span>
      </div>
      <ArrowRightSharp />
    </li>
  );
};

export default SideBarItem;
