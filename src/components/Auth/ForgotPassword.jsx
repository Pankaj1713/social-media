import React, { useState } from "react";

const ForgotPassword = ({ onBackToLogin, onResetPassword }) => {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link sent!");

    // ✅ Call onResetPassword only if it exists
    if (typeof onResetPassword === "function") {
      onResetPassword();
    } else {
      console.error("onResetPassword is not a function");
    }
  };

  return (
    <div className="flex items-center justify-center bg-white m-auto rounded-3xl w-[400px] h-[400px] p-[50.18px] mt-7">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-[#2F3733]">
          Forget password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F3733] focus:border-transparent"
            placeholder="E-mail or Phone"
            required
          />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#2F3733] text-white rounded-lg hover:bg-[#1a201c] transition-colors"
          >
            Confirm
          </button>
        </form>

        <button
          onClick={onBackToLogin}
          className="w-full text-sm text-gray-500 hover:text-gray-700 text-center"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
