import React, { useState } from "react";

const RegisterForm = ({ onBackToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    // Add API call logic here if needed
  };

  return (
    <div className="flex items-center justify-center bg-white m-auto rounded-3xl w-[460px] h-[650px] p-[50.18px] mt-7">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2F3733]">Register Now</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F3733]"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F3733]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F3733]"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F3733]"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2F3733]"
            required
          />

          <div>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#2F3733]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#2F3733] text-white rounded-lg hover:bg-[#1a201c] transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button onClick={onBackToLogin} className="text-[#2F3733] font-bold">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
