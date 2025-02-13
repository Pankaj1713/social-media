import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/RegisterForm";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import SocialMediaComponents from "./components/SocialMediaComponents";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div className="flex flex-col h-screen container m-auto">
      {/* Navbar at the top */}
      <Navbar />
      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <Sidebar />
        <SocialMediaComponents />
      </div>
      {/* Authentication Forms on the right */}
      <div className="flex-1 flex items-center justify-center p-5">
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
      </div>
    </div>
  );
};

export default App;
