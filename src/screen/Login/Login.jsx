import React, { useState } from "react";
import { CoverBg, iconStartup } from "../../assets";
import axios from "axios";
import "./Login.css";
import { BASE_API } from "../../core/api";
import { useNavigate } from "react-router-dom";
import { Backdrop, Box, CircularProgress, Dialog } from "@mui/material";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onLogin = () => {
    setIsLoading(true);
    axios
      .post(BASE_API + "/user/auth/login", {
        email: username,
        password: password,
      })
      .then(function ({ data }) {
        if (data.status === 200) {
          localStorage.setItem("TOKEN", data.data.token);
          setIsLoading(false);
          navigate("/home");
        }
      })
      .catch(function (e) {
        console.log(e);
        setIsLoading(false);
        setShowError(true);
      });
  };
  // if (isLoading) {
  //   return (
  //     <Backdrop
  //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open={isLoading}
  //     >
  //       <CircularProgress color="inherit" />
  //     </Backdrop>
  //   );
  // }
  return (
    <div className="container">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="col-1">
        <img src={CoverBg} className="image-1" alt="" />
      </div>
      <div className="col-2">
        <div className="hello">
          <img src={iconStartup} className="icon-1" alt="" />

          <p className="title">Hello,</p>
        </div>

        <p className="desc">Please fill the username and password!</p>
        {showError ? (
          <p className="error">
            Incorrect username and password, please try again!
          </p>
        ) : null}

        <p className="title-login">Phone Number</p>
        <input
          type="text"
          value={username}
          onChange={(val) => setUsername(val.target.value)}
        />
        <p className="title-login">Password</p>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(val) => setPassword(val.target.value)}
          // id="inputPassword"
        ></input>
        <div className="show-password">
          <input
            type="checkbox"
            onChange={() => setShowPassword(!showPassword)}
            className="box-checklist"
          />
          <p className="text-show-password">Show Password</p>
        </div>
        <button className="button-login" onClick={() => onLogin()}>
          Login
        </button>
        <button className="button-sign-up" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
