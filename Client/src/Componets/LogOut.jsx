import React from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogOut = ({ className }) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    toast.success("logout success");
    navigate("/");
  };
  return (
    <button
      onClick={handleLogOut}
      className={twMerge(
        "w-full bg-gray-600 border border-1 text-white font-medium py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 hover:text-black",
        className
      )}
    >
      LogOut
    </button>
  );
};

export default LogOut;
