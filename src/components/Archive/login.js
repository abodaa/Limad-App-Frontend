// import { React, useState } from "react";
// import "../style/login.css";
// import loginimage from "../images/habit.jpg";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import SuccessAlert from "../alert";

// import Cookies from "universal-cookie";
// const cookies = new Cookies();

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, setLogin] = useState();
//   const [token, setToken] = useState();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (email && password) {
//         const res = await axios.post(
//           "http://localhost:3000/api/v1/auth/login",
//           {
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
//           setLogin(false);
//           console.log(res.data);
//         }

//         window.location.href = "/Dashboard";
//       } else {
//         alert("Please provide all info");
//       }
//     } catch (error) {
//       console.log(error);
//       setLogin(false);
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
//             Log in
//           </button>
//         </form>
//         {login && <SuccessAlert />}{" "}
//         {login === false && <div>Something went wrong</div>}
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
