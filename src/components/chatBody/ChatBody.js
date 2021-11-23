import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

export default class ChatBody extends Component {
  state = { width: 0, height: 0, isShowChat: false };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  
  handleChatContent = () => {
    this.setState({
      isShowChat: true
    })
  }
  render() {
    return (
      <div className="__main">
        <div className="main__chatbody">
          <ChatList   />
        </div>
      </div>
    );
  }
}
