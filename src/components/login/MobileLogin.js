import React, { useState } from "react";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

function MobileLogin() {
  const [value, setValue] = useState();
  let redirect = useNavigate();
  return (
    <div className="mobile__login">
      <h2>Login</h2>
      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
      <button onClick={() => redirect("/otp-verify")}>Next</button>
    </div>
  );
}

export default MobileLogin;
