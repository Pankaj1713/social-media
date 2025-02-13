import React, { useState } from "react";

const ResetPassword = ({ onBackToLogin, onResetPassword }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password reset successful!");
    onBackToLogin(); // Go back to Login after reset
  };

  return (
    <div className="flex items-center justify-center bg-white m-auto rounded-3xl w-[460px] h-[650px] p-[50.18px] mt-7">
      <div className="w-full max-w-md space-y-8">
        <h2 className="text-2xl font-semibold text-center">Reset password</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#2F3733] text-white rounded-lg hover:bg-[#1a201c]"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
