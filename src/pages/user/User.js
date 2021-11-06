import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-add-button">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">Anna Hatheway</span>
              <span className="user-show-position">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-info-title">annahatheway99</span>
            </div>
            <div className="user-show-info">
              <CalendarToday className="user-show-icon" />
              <span className="user-show-info-title">10.03.1985</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-info-title">+1 234 567 890</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon" />
              <span className="user-show-info-title">
                annehatherway@gmail.com
              </span>
            </div>
            <div className="user-show-info">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-info-title">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Anne Hatheway"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>position</label>
                <input
                  type="text"
                  placeholder="Software Engineer"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annehatheway99"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Birth date</label>
                <input
                  type="text"
                  placeholder="10.03.1985"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Telephone number</label>
                <input
                  type="text"
                  placeholder="+1 234 567 890"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email address</label>
                <input
                  type="text"
                  placeholder="annehatheway@gmail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Current Location</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
