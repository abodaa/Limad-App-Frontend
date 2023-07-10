import "../style/login.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { VscAdd } from "react-icons/vsc";
import { useState } from "react";
import axios from "axios";
import LoginAlertsuccess from "./Alerts/LoginAlertsuccess";
import LoginAlertIncorrectUsername from "./Alerts/LoginAlertIncorrectUsername";
import LoginAlertIncorrectPassword from "./Alerts/LoginAlertIncorrectPassword";

import loginimage from "../images/habit.jpg";
// import SuccessAlert from "./Alert";

import Cookies from "universal-cookie";
const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function AddHabit() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [token, setToken] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        const res = await axios.post(
          "https://sore-jade-fossa-robe.cyclic.app/api/v1/auth/login",
          {
            email: email,
            password: password,
          }
        );

        if (res.data.token) {
          console.log(res.data.token);
          cookies.set("TOKEN", res.data.token, {
            path: "/",
          });
        } else {
          setLogin(false);
          console.log(res.data);
        }
        setLogin(true);
        setTimeout(() => {
          window.location.href = "/Dashboard";
        }, 2000);
      } else {
        alert("Please provide all info");
      }
    } catch (error) {
      console.log(error.response.data.msg);
      setLogin(error.response.data.msg);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="nav-btn-two" onClick={handleClickOpen}>
        Log in
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>LOGIN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </DialogContentText>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              {" "}
              <h2>Welcome to LIMAD | ልማድ </h2>
            </div>

            {/* email */}
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email"
            />
            {/* password */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="login-btn"
              onClick={(e) => handleSubmit(e)}
            >
              Log in
            </button>
            {login === true && <LoginAlertsuccess />}
            {login === "Unauthorized User" && <LoginAlertIncorrectPassword />}
            {login === "User not found" && <LoginAlertIncorrectUsername />}
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          {/* <Button onClick={handleSubmit}>Login</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
