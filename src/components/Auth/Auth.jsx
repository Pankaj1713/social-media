import React, { useState } from "react";
import LoginForm from "./Login";
import RegisterForm from "./RegisterForm";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {isRegister ? (
        <RegisterForm onLoginClick={() => setIsRegister(false)} />
      ) : (
        <LoginForm onRegisterClick={() => setIsRegister(true)} />
      )}
    </>
  );
};

export default Auth;
