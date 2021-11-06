import React from "react";
import "./SideBar.css";
import logo from "./logo.svg";
// import toggle from "../topbar/Topbar";
import {
  LineStyle,
  Timeline,
  People,
  TrendingUp,
  Person,
  LocalMall,
  MonetizationOn,
  AccountBalanceWallet,
  Report,
  Email,
  MarkunreadMailbox,
  Forum,
  ControlCamera,
} from "@material-ui/icons";

const SideBar = (toggle) => {
  //   const [toggle, setToggle] = useState(toggle);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <span className="logoWrapper">
            <img src={logo} alt="logo" className="logo1" />
          </span>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <div className="listWrapper">
                <LineStyle />
                <span className="title">Home</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <TrendingUp />
                <span className="title">Sales</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <People />
                <span className="title">Customer Service</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Person />
                <span className="title">Users</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <LocalMall />
                <span className="title">Products</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <MonetizationOn />
                <span className="title">Sales</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <AccountBalanceWallet />
                <span className="title">Transactions</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Report />
                <span className="title">Reports</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Email />
                <span className="title">Mail</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <MarkunreadMailbox />
                <span className="title">Feedbacks</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Forum />
                <span className="title">Messages</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <ControlCamera />
                <span className="title">Manage</span>
              </div>
            </li>
            <li className="sidebarListItem">
              <div className="listWrapper">
                <Timeline />
                <span className="title">Analytics</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
