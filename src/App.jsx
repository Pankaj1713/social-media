import React, { useState } from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/RegisterForm";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <>
      {currentForm === "login" && (
        <Login
          onForgotPassword={() => setCurrentForm("forgotPassword")}
          onRegisterClick={() => setCurrentForm("register")}
        />
      )}
      {currentForm === "register" && (
        <Register onBackToLogin={() => setCurrentForm("login")} />
      )}
      {currentForm === "forgotPassword" && (
        <ForgotPassword
          onBackToLogin={() => setCurrentForm("login")}
          onResetPassword={() => setCurrentForm("resetPassword")}
        />
      )}
      {currentForm === "resetPassword" && (
        <ResetPassword onBackToLogin={() => setCurrentForm("login")} />
      )}
    </>
  );
};

export default App;
