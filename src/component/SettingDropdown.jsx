import React from "react";
import { Button, Image } from "react-bootstrap";
import "../design/dropdown-navigation/settingDropdown.css";
const SettingDropdown = () => {
  return (
    <div>
      <div className="dropdownSetting">
        <div className="dropdown-navigation-header">
          <div>
            <div className="iconThree hex" style={{ padding: 3 }}>
              <div className="hex-background">
                <Image className="icons" src="./Image/Avatar/20.jpg" />
              </div>
            </div>
          </div>
          <div className="profileInfoHolder">
            <p style={{ fontSize: 14, color: "white" }}>Hi Marina!</p>
            <p>@marinavalentine</p>
          </div>
        </div>
        <p className="dropdown-navigation-category">My Profile</p>
        <div className="linkHolder">
          <a href="hub-Profile" className="dropdown-navigation-link">
            Profile Info
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Social & Stream
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Notifications
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Messages
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Friend Requests
          </a>
        </div>
        <p className="dropdown-navigation-category">Account</p>
        <div className="linkHolder">
          <a href="hub-Profile" className="dropdown-navigation-link">
            Account Info
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Change Password
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            General Setting
          </a>
        </div>
        <p className="dropdown-navigation-category">Groups</p>
        <div className="linkHolder">
          <a href="hub-Profile" className="dropdown-navigation-link">
            Manage Groups
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Invitations
          </a>
        </div>
        <p className="dropdown-navigation-category">my store</p>
        <div className="linkHolder">
          <a
            href="hub-Profile"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            className="dropdown-navigation-link"
          >
            My Account
            <p style={{ margin: 0, padding: 0 }}>44$</p>
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Sales Statement
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Manage Items
          </a>
          <a href="hub-Profile" className="dropdown-navigation-link">
            Downloads
          </a>
        </div>
      </div>
    </div>
  );
};

export default SettingDropdown;