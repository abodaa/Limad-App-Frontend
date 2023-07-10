import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Cookies from "universal-cookie";
import "../style/dashboard.scss";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import DeleteConfirmationPopUp from "../components/DeletConfirmationPopUp";
import EditHabit from "../components/EditHabit";
import Footer from "../components/Footer";


const cookies = new Cookies();
let token = cookies.get("TOKEN");

export default function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [openId, setOpenId] = useState();
  const [open, setOpen] = useState(false);

  const [habitStatus, setHabitStatus] = useState("all");


  const handleOpen = (i) => {
    setOpenId(i);
    setOpen((prevState) => !prevState);
  };

  const handleClose = () => {
    setOpen(false);
  };


const allStatus = () => {
  setHabitStatus("all");
};
 const newStatus = () => {
   setHabitStatus("new");
 };
  const onProgressStatus = () => {
    setHabitStatus("on progress");
  };
  const cancelledStatus = () => {
    setHabitStatus("cancelled");
  };
  const achievedStatus = () => {
    setHabitStatus("achieved");
  };


  useEffect(() => {
    axios
      .get(
        `https://sore-jade-fossa-robe.cyclic.app/api/v1/habit?habitStatus=${habitStatus}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setHabits(res.data.habits);
        console.log(res.data.habits);
      });
  }, [habitStatus]);

  return (
    <div>
      <div className="App">
        {/* Header */}
        <header className="dashboard-header">
          <p>
            Harness the power of our personalized habit tracker app to
            streamline your everyday routines and achieve your goals.
          </p>
        </header>

        {/* Filter buttons */}
        <div className="filter-buttons">
          <button onClick={allStatus}>All</button>
          <button onClick={newStatus}>New</button>
          <button onClick={onProgressStatus}>On Progress</button>
          <button onClick={cancelledStatus}>Cancelled</button>
          <button onClick={achievedStatus}>Achieved</button>
        </div>
      </div>

      <div style={{ marginTop: "3rem" }} className="habit-main-container">
        {habits.map((habit, index) => {
          // Start date formatting
          let startYear = new Date(habit.createdAt).getFullYear();
          let startMonth = new Date(habit.createdAt).getMonth();
          let startDay = new Date(habit.createdAt).getDate();
          let startFormat = startMonth + "/" + startDay + "/" + startYear;

          // Get today
          let todayYear = new Date().getFullYear();
          let todayMonth = new Date().getMonth();
          let todayDay = new Date().getDate();
          let todayFormat = todayMonth + "/" + todayDay + "/" + todayYear;

          // End date formatting
          let endYear = new Date(habit.enddate).getFullYear();
          let endMonth = new Date(habit.enddate).getMonth();
          let endDay = new Date(habit.enddate).getDate();
          let endFormat = endMonth + "/" + endDay + "/" + endYear;

          // Calculate date difference
          let startDate = new Date(`${startFormat}`);
          let endDate = new Date(`${endFormat}`);
          let todayDate = new Date(`${todayFormat}`);

          // To calculate the time difference of two dates
          let Difference_In_Time = endDate.getTime() - todayDate.getTime();

          // To calculate the no. of days between two dates
          let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
          // const motivationText =
          return (
            <div key={habit._id} className="habit-container">
              <div className="title-status-container">
                <h3>{habit.title}</h3>
                <p
                  className="habit-status"
                  style={{
                    color:
                      habit.status === "achieved"
                        ? "green"
                        : habit.status === "on progress"
                        ? "#8B8000"
                        : habit.status === "cancelled"
                        ? "red"
                        : habit.status === "new"
                        ? "black"
                        : "black",
                  }}
                >
                  {habit.status}
                </p>
              </div>
              <div className="title-status-container">
                <p>Started</p>
                <p className="status-description">
                  {new Date(habit.createdAt).toDateString()}
                </p>
              </div>
              <div className="title-status-container">
                <p>End Date</p>
                <p className="status-description">
                  {new Date(habit.enddate).toDateString()}
                </p>
              </div>
              <div className="title-status-container">
                <p>Time to achieve</p>
                {Difference_In_Days > 0 ? (
                  <p className="status-description">
                    {Difference_In_Days}{" "}
                    {Difference_In_Days > 1 ? "Days" : "Day"}
                  </p>
                ) : (
                  <p className="status-description" style={{ color: "red" }}>
                    Expired
                  </p>
                )}
              </div>
              <div
                className={
                  habit.status === "achieved"
                    ? "progress-bar-achieved"
                    : habit.status === "cancelled"
                    ? "progress-bar-cancelled"
                    : habit.status === "on progress"
                    ? "progress-bar-onprogress"
                    : "progress-bar-new"
                }
              ></div>
              <div key={index} className="edit-delete-main-container">
                <div className="icons-container">
                  <p className="Motivation-text">
                    {habit.status === "achieved"
                      ? "Well done!"
                      : habit.status === "cancelled"
                      ? "Remember you can always start over."
                      : habit.status === "on progress"
                      ? "You got this!"
                      : "Awsome! Keep on going."}
                  </p>
                  <CiMenuKebab
                    className="icons"
                    style={{ fontSize: "1.2rem", color: "#484b6a" }}
                    onClick={() => handleOpen(habit._id)}
                  />
                </div>
                {openId === habit._id && open && (
                  <div className="edit-delete-icons-container">
                    <EditHabit
                      id={habit._id}
                      status={habit.status}
                      title={habit.title}
                      enddate={habit.enddate}
                    />
                    <DeleteConfirmationPopUp id={habit._id} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
