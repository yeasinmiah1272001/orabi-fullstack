import React, { useEffect, useState } from "react";
import Container from "../Componets/Container";
import SectionTitle from "../Componets/SectionTitle";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { serverUrl } from "../../Config";

const Signup = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log("token", token);
  // initial state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chack, setchack] = useState(false);
  const [loading, setLoading] = useState(false);
  // error chack
  const [errorName, setErrorName] = useState("");
  const [errEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  // console.log(name);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  // name
  const handleName = (e) => {
    setName(e.target.value);
    setErrorName("");
  };
  // email
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail("");
  };
  const handlePassWord = (e) => {
    setPassword(e.target.value);
    setErrorPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setErrorName("enter your name");
    }
    if (!email) {
      setErrorEmail("enter your email");
    }
    if (!password) {
      setErrorPassword("enter your password");
    }

    try {
      setLoading(true);
      if (name && email && password) {
        const response = await axios.post(`${serverUrl}/api/user/register`, {
          name,
          email,
          password,
        });
        const data = response.data;
        if (data?.success) {
          toast.success(data?.message);
          navigate("/signin");
        } else {
          toast.error(data?.message);
        }
      }
    } catch (error) {
      console.log("registration error");
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {/* <SectionTitle title={"Signin Page"} /> */}
      <div className="flex items-center justify-center min-hscreen ">
        <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Create your scccount
          </h2>
          <div className="space-y-4">
            {/* full name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="text"
                placeholder="Enter full name"
                // value={name}
                onChange={handleName}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
              {errorName && <p className="text-red-500">{errorName}</p>}
            </div>
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
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <p>Terms And Condition</p>
            </div>
          </div>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-all"
          >
            Sign Up
          </button>
          {/* Additional Options */}
          <p className="mt-4 text-sm text-gray-600 text-center">
            already have an account?{" "}
            <Link
              to="/signin"
              className="text-indigo-600 hover:underline font-semibold"
            >
              Signin
            </Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
