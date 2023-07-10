// import { React, useState, useEffect } from "react";
// import "../style/login.css";
// import loginimage from "../images/habit.jpg";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import SuccessAlert from "../alert";

// import Cookies from "universal-cookie";
// const cookies = new Cookies();

// export default function Signup() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [register, setRegister] = useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (username && email && password) {
//         const res = await axios.post(
//           "http://localhost:3000/api/v1/auth/register",
//           {
//             username: username,
//             email: email,
//             password: password,
//           }
//         );

//         if (res.data.token) {
//           console.log(res.data.token);
//           cookies.set("TOKEN", res.data.token, {
//             path: "/",
//           });
//         } else {
//           setRegister(false);
//           console.log(res.data);
//         }
//         window.location.href = "/Dashboard";
//       } else {
//         alert("Please provide all info");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <img src={loginimage} alt="" className="login-page-img" />
//       <div className="form-container">
//         {/* ************************* */}
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <div>
//             {" "}
//             <h2>Welcome to LIMAD | ልማድ </h2>
//           </div>
//           {/* Username */}
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             id="username"
//             required
//             placeholder="Enter your username. e.g. Abraham"
//           />
//           {/* email */}
//           <label htmlFor="email">Email</label>
//           <input
//             required
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id="email"
//             placeholder="Enter your email"
//           />
//           {/* password */}
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             id="password"
//             required
//             placeholder="Enter your password"
//           />
//           <button
//             type="submit"
//             className="login-btn"
//             onClick={(e) => handleSubmit(e)}
//           >
//             Sign up
//           </button>
//         </form>
//         {register && <SuccessAlert />}{" "}
//         {register === false && <div>Something went wrong</div>}
//         {/* ************************* */}
//         <div className="login-page-footer">
//           <p>
//             Already have LIMAD | ልማድ account?
//             <Link
//               to="/Login"
//               style={{ textDecoration: "none", color: "black" }}
//             >
//               <p className="login-page-footer-login-btn"> Log in.</p>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
