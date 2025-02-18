import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/RegisterForm";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import SocialMediaComponents from "./components/SocialMediaComponents";
import CreatePost from "./components/CreatePost";
import PostCard from "./components/PostCard";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  return (
    <div className="flex flex-col h-screen container m-auto">
      {/* Navbar at the top */}
      <Navbar />
      <div className="flex flex-grow mt-10 pb-10 md:mt-auto">
        {/* Sidebar on the left */}
        <Sidebar />
        <div className=" w-[555px] md:ml-28 mt-5 flex flex-col gap-10">
        <CreatePost />
        <PostCard/>
        {/* <ProfileCard/> */}
        </div>
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
