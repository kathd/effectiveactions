import React from "react";
import LoginForm from "../components/forms/LoginForm";
import "../styles/form.css"

const Login = () => {
  return (
    // use modals for login/signup forms
    <div className="login">
      <LoginForm />
    </div>
  );
};

export default Login;
