import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { VscAdd } from "react-icons/vsc";
import { useState } from "react";
import axios from "axios";

import Cookies from "universal-cookie";
const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function AddHabit() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("");
  const [enddate, setEnddate] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title) {
        const res = await axios.post(
          "https://limad-habits-tracker-api-1.onrender.com/api/v1/habit",
          {
            title: title,
            enddate: enddate,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        window.location.href = "/Dashboard";
      } else {
        alert("Please provide all info");
      }
    } catch (error) {
      console.log(error);
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
      <button className="add-habit-filter-mobile" onClick={handleClickOpen}>
        <VscAdd />
       
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Habit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam. Officiis aut impedit qui esse.
          </DialogContentText>
          <div className="add-habit-input-container">
            <div className="input-contaier">
              <label htmlFor="title">Title</label>
              <input
                required
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your title of habit ..."
                id="title"
                className="add-habit-input"
              />
            </div>

            <div className="input-contaier">
              <label htmlFor="date">End date</label>

              <input
                required
                type="date"
                name="enddate"
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
                id="date"
                className="date-picker"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Habit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
