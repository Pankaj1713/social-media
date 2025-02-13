import React, { useState } from "react";
import { FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const LoginForm = ({ onRegisterClick, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
  };

  return (
    <div className="flex items-center justify-center bg-white m-auto rounded-3xl w-[460px] h-[650px] p-[50.18px] mt-7">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-[60px] font-bold text-[#30392A]">Welcome</h1>
          <p className="text-3xl text-black mt-1">Login | Sign up</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-[2.1px] border-[#A6A6A6] rounded-lg  focus:ring-[#30392A]"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-[2.1px] border-[#A6A6A6] rounded-lg  focus:ring-[#30392A]"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-500"
            >
              {showPassword ? (
                <IoEyeOffOutline size={22} />
              ) : (
                <IoEyeOutline size={22} />
              )}
            </button>
          </div>

          <div className="text-right">
            <p
              onClick={onForgotPassword} // ⬅️ Clicking this switches to ForgotPassword component
              className="text-sm text-blue-500 hover:text-blue-600 cursor-pointer"
            >
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#30392A] text-[#E3E3E3] rounded-lg hover:bg-[#1a201c] transition"
          >
            Log in
          </button>
        </form>

        <div className="flex items-center gap-4 mt-6">
          <div className="flex-1 border-b border-[#30392A]"></div>
          <p className="text-sm text-gray-500">Or Login with</p>
          <div className="flex-1 border-b border-[#30392A]"></div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#30392A] rounded-lg hover:bg-gray-100 transition">
            <FaGoogle size={20} className="text-black" />
            Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#30392A] rounded-lg hover:bg-gray-100 transition">
            <FaTwitter size={20} className="text-black" />
            Twitter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#30392A] rounded-lg hover:bg-gray-100 transition">
            <FaFacebook size={20} className="text-black" />
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <button
            onClick={onRegisterClick}
            className="text-[#30392A] font-bold"
          >
            Register Now.
          </button>
        </p>

        <p className="text-xs text-gray-400 text-center mt-4">
          Click “Sign In” to agree to Connectpik’s{" "}
          <a href="#" className="text-blue-500 underline">
            Terms and conditions
          </a>{" "}
          and acknowledge that Connectpik’s{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy policy
          </a>{" "}
          applies to you.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
