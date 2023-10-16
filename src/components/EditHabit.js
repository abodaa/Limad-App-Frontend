import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { MdOutlineModeEditOutline } from "react-icons/md";

import { useState } from "react";
import axios from "axios";

import EditError from "./Alerts/EditError";
import EditSuccess from "./Alerts/EditSuccess";

import Cookies from "universal-cookie";
const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function EditHabit(props) {
  const [open, setOpen] = React.useState();
  const [status, setStatus] = useState(props.status);
  const [title, setTitle] = useState(props.title);
  const [enddate, setEnddate] = useState(props.enddate);
  const [editSuccess, setEditSuccess] = useState();

  let handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `https://tender-cow-headscarf.cyclic.app/api/v1/habit/${props.id}`,
        {
          status: status,
          title: title,
          enddate: enddate,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setEditSuccess(true);
      window.location.href = "/Dashboard";
     
    } catch (error) {
      console.log(error);
      setEditSuccess(false);
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
      <div className="edit-delete-icon-one" onClick={handleClickOpen}>
        <MdOutlineModeEditOutline style={{ color: "green" }} />
        <p>Edit</p>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Habit</DialogTitle>
        <DialogContent>
         
          <div className="add-habit-input-container">
            <div className="input-contaier">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your title of habit ..."
                id="title"
                className="add-habit-input"
              />
            </div>
            <div className="status-picker">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={status}
                name="status"
                onChange={(e) => setStatus(e.target.value)}
                className="status-dropdown"
              >
                <option value="new">New</option>
                <option value="on progress">On Progress</option>
                <option value="cancelled">Cancelled</option>
                <option value="achieved">Achieved</option>
              </select>
            </div>

            <div className="input-contaier">
              <label htmlFor="date">End date</label>

              <input
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
          <Button onClick={handleEdit}>Edit Habit</Button>
        </DialogActions>
      </Dialog>

      {editSuccess === true && <EditSuccess />}
      {editSuccess === false && <EditError />}
    </div>
  );
}
