import React from "react";
import "../style/footer.scss";
import footerLogo from "../images/habits.png";
import { BsTelephoneFill } from "react-icons/bs";
import { LuMails } from "react-icons/lu";
import { SiFacebook } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { PiArticleMedium } from "react-icons/pi";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <div className="footer-main-container">
        <div className="footer-left-container">
          <Link
            to="/"
            className="footer-logo-wrapper"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <img src={footerLogo} alt="" className="footer-logo" />
            <p className="footer-logo-text">ልማድ | LIMAD</p>
          </Link>
          <p>
            Harness the power of our personalized habit tracker app to
            streamline your everyday routines and achieve your goals.
          </p>
          <div className="donate-social-icons-container">
            <button className="footer-donate-btn">
              <PiArticleMedium className="social-icon" />
              Blog
            </button>
            <BsTelegram className="social-icon" />
            <SiFacebook className="social-icon" />
          </div>
        </div>
        <div className="footer-devider"></div>

        <div className="footer-center-container">
          <h2 className="work-with-me-title">Work with me</h2>
          <div className="footer-contact">
            <BsTelephoneFill className="phone-icon" />
            <div className="phone-numbers">
              <p>+251922338477</p>
              <p>+251707214695</p>
            </div>
          </div>
          <div className="footer-contact">
            <LuMails className="email-icon" />
            <div className="emails">
              <a href="mailto: abrahambogale747@gmail.com" className="email">
                abrahambogale747@gmail.com
              </a>
            </div>
          </div>
        </div>
        {/* <div className="footer-right-container">
        <div className="footer-contact">
          <BsTelephoneFill className="social-icon-one" />

          <SiFacebook className="social-icon-two" />
        </div>
      </div> */}
      </div>
      <p className="footer-copy-right">
        &copy; 2023 ልማድ | Limad App by Abraham
      </p>
    </div>
  );
}
