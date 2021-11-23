import React, { Component } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
export default class OtpField extends Component {
  state = { otp: "" };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div className="otp__container">
        <h2>Enter verification code</h2>
        <OtpInput
          value={this.state.otp}
          onChange={this.handleChange}
          numInputs={4}
          separator={<span>-</span>}
        />
        <Link to="/home">
          <button className="button"> Get OTP</button>
        </Link>
      </div>
    );
  }
}
