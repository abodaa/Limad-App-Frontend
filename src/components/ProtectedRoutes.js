import React from "react";
import { Routes, Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");


export default function ProtectedRoutes() {
  return token ? <Outlet /> : <Navigate to="/" />;
};