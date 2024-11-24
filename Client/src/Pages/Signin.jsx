import React, { useEffect, useState } from "react";
// import SectionTitle from "../Components/SectionTitle";
import Container from "../Componets/Container";
import SectionTitle from "../Componets/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../../Config";

const Signin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log("token", token);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // error chack
  const [errEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  // email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail("");
  };
  const handlePassWord = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorEmail("enter your valid email");
    }
    if (!password) {
      setErrorPassword("enter your valid password");
    }

    if (email && password) {
      try {
        setLoading(true);
        const response = await axios.post(`${serverUrl}/api/user/login`, {
          email,
          password,
        });
        const data = response?.data;
        console.log("data", data);
        if (data.success) {
          localStorage.setItem("token", data?.token);

          navigate("/");
          toast.success(data?.message);
        } else {
          toast.error("user login unsuccessfull");
        }
      } catch (error) {
        console.error("user login unsuccessful", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <SectionTitle title={"Signin Page"} />
      <div className="flex items-center justify-center min-hscreen ">
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Sign In
          </h2>
          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                onChange={handleEmail}
                placeholder="Enter Your Email"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
              {errEmail && <p className="text-red-500">{errEmail}</p>}
            </div>
            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={handlePassWord}
                placeholder="Enter Your Password"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
              {errorPassword && <p className="text-red-600">{errorPassword}</p>}
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSignIn}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-all"
          >
            Sign In
          </button>
          {/* Additional Options */}
          <p className="mt-4 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default Signin;
