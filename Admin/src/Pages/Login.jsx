import React, { useState } from "react";
import { logo } from "../assets/images";
import toast from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../../Config";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${serverUrl}/api/user/addmin`, {
        email,
        password,
      });
      const data = response.data;
      if (data.success) {
        setToken(data.token);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      //   toast.success("Login successful!");
    } catch (error) {
      console.log("login error", error);
      toast.error(error?.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-slate-400 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <img src={logo} alt="Logo" className="w-16 h-8 mx-auto mb-6" />
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-4">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left font-medium text-gray-600">
              Admin Email
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-left font-medium text-gray-600">
              Admin Password
            </label>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
