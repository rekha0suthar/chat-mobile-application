import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ChatBody from "./components/chatBody/ChatBody";
import MobileLogin from "./components/login/MobileLogin";
import { Routes, Route } from "react-router-dom";
import OtpField from "./components/login/OtpField";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<MobileLogin />} />
        <Route path="/otp-verify" element={<OtpField />} />
        <Route path="/home" element={<ChatBody />} />
      </Routes>
    </div>
  );
}

export default App;
