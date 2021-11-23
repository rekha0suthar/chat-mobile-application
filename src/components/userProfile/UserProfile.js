import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img
              src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
              alt="profile"
            />
          </div>
          <h4>John</h4>
        </div>
      </div>
    );
  }
}
