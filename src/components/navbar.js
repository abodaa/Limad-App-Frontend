import "../style/navbar.scss";
import React from "react";
import logo from "../images/habits.png";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      {/* Navigation */}
      <nav className="nav-container">
        <Link
          to="/"
          className="logo-help-btn"
          style={{ textDecoration: "none", color: "#484b6a" }}
        >
          <img src={logo} alt="" className="logo" />
          <p className="logo-text">ልማድ | LIMAD</p>
        </Link>
        <div className="menu-profpic-container">
          <LoginModal />
          <SignupModal />
        </div>
      </nav>
    </div>
  );
}
