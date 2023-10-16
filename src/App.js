
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ProtectedNav from "./components/ProtectedNav";
import AddHabit from "./components/Addhabitmodal";


import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");
export default function App() {
  return (
    <BrowserRouter>
      <div>
        {!token ? <Navbar /> : <ProtectedNav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Addhabit" element={<AddHabit />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
