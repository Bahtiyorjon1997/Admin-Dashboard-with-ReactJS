import React from "react";

const SideBarItem = ({ id, icon, title, children }) => {
  return (
    <div className="sidebarItem" id={id}>
      {title}
    </div>
  );
};

export default SidebarItem;
