import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser-container">
      <h3 className="newUser-title">Create New User</h3>
      <form className="newUser-form">
        <div className="newUser-item">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUser-item">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUser-item">
          <label>email</label>
          <input type="email" placeholder="john.smith@gmail.com" />
        </div>
        <div className="newUser-item">
          <label>Password</label>
          <input type="passpord" placeholder="passpord" />
        </div>
        <div className="newUser-item">
          <label>Phone Number</label>
          <input type="number" placeholder="+1 234 567 890" />
        </div>
        <div className="newUser-item">
          <label>Address</label>
          <input type="text" placeholder="New York" />
        </div>
        <div className="newUser-item">
          <label>Gender</label>
          <div className="newUser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">female</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
