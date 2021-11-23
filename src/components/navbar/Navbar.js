import React, { Component } from "react";
import "./navbar.css";
import logo from "./../../images/logo.png";
import UserProfile from "../userProfile/UserProfile";
export default class Navbar extends Component {
 
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo} alt=""></img>
        </div>
        <div className="nav__profile">
          <UserProfile />
        </div>
      </div>
    );
  }
}
