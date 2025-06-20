
import "../style/dashboard.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

import DeleteError from "./Alerts/DeleteError";
import DeleteSuccess from "./Alerts/DeleteSuccess";

import Cookies from "universal-cookie";
const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function DeleteHabit(props) {
  const [deleteSuccess, setDeleteSuccess] = useState();
  const [open, setOpen] = React.useState(false);
   // Handle submit for Delete functionality

  let handleDelete = async (e) => {
       e.preventDefault();
    try {
      const res = await axios.delete(
        `https://limad-habits-tracker-api-1.onrender.com/api/v1/habit/${props.id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setDeleteSuccess(true);
      window.location.href = "/Dashboard";
 
    } catch (error) {
      console.log(error);
      setDeleteSuccess(false);
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
      <div className="edit-delete-icon-two" onClick={handleClickOpen}>
        <MdDeleteOutline style={{ color: "red" }} />
        <p>Delete</p>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>DELETE</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this habit?
          </DialogContentText>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
      {deleteSuccess === true && <DeleteSuccess />}
      {deleteSuccess === false && <DeleteError />}
    </div>
  );
}
