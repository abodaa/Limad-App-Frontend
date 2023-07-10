import "../style/navbar.scss";
import React from "react";
import logo from "../images/logo.png";
import searchIcon from "../images/search.png";
import menuImage from "../images/menu.png";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      {/* Navigation */}
      <nav className="nav-container">
        <div className="logo-help-btn">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>
          {/* <button className="nav-btn-one">Help AI</button> */}
        </div>

        {/* <div className="input-container">
          <input type="text" placeholder="Enter your habit name ..." />
          <img src={searchIcon} alt="" className="search-icon" />
        </div> */}

        <div className="menu-profpic-container">
          {/* <img src={menuImage} alt="" className="nav-imgs" /> */}
          {/* <img src={profPic} alt="" className="nav-imgs" /> */}
          {/* <Link to="/Login" class="list">
            <button className="nav-btn-two">Log in</button>
          </Link> */}
          <LoginModal />
          <SignupModal />

          {/* <Link to="/Signup" class="list">
            <button className="nav-btn-three">Sign up</button>
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
