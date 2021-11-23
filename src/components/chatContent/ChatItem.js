import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          {this.props.uploadedImage && (
            <img
              src={this.props.uploadedImage}
              alt=""
              style={{ width: "100px", height: "100px" }}
            />
          )}
          <div className="chat__msg">{this.props.msg}</div>

          <div className="chat__meta">
            <span>{this.props.date ? this.props.date : "1:32pm"}</span>
          </div>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
