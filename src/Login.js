import React from "react";
import "./Login.css";
import logo from "./images/chat.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

const Login = () => {
  const singIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src={logo} alt="" />
        <h1>Chat-Station</h1>
      </div>
      <Button onClick={singIn}>Sign in</Button>
    </div>
  );
};

export default Login;
