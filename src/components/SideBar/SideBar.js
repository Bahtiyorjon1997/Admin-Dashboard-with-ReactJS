import React, { useState } from "react";
import "./SideBar.css";
import logo from "./logo.png";
import data from "../SideBarItem/SideBarItem";
// import toggle from "../topbar/Topbar";
import {
  LineStyle,
  Timeline,
  People,
  TrendingUp,
  ArrowRightSharp,
} from "@material-ui/icons";
import SidebarItem from "../SideBarItem/SideBarItem";

const SideBar = () => {
  //   const [toggle, setToggle] = useState(toggle);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <span className="logoWrapper">
            <img src={logo} alt="logo" className="logo1" />
          </span>

          <ul className="sidebarList">
            {data.map((item) => {
              <SidebarItem
                icon={item.icon}
                title={item.title}
                id={item.id}
                children={item.children}
              />;
            })}

            {/* <li className="sidebarListItem">
              <div className="listWrapper">
                <LineStyle />
                <span className="title">Home</span>
              </div>

              <ArrowRightSharp />
            </li> */}
            {/* <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <TrendingUp />
                <span className="title">Sales</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <People />
                <span className="title">Customer Service</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <LineStyle />
                <span className="title">Home</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <TrendingUp />
                <span className="title">Sales</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <People />
                <span className="title">Customer Service</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <LineStyle />
                <span className="title">Home</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <TrendingUp />
                <span className="title">Sales</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <People />
                <span className="title">Customer Service</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <LineStyle />
                <span className="title">Home</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <TrendingUp />
                <span className="title">Sales</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <People />
                <span className="title">Customer Service</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <LineStyle />
                <span className="title">Home</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <TrendingUp />
                <span className="title">Sales</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <People />
                <span className="title">Customer Service</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <LineStyle />
                <span className="title">Home</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <TrendingUp />
                <span className="title">Sales</span>
              </div>

              <ArrowRightSharp />
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <People />
                <span className="title">Customer Service</span>
              </div>

              <ArrowRightSharp />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
