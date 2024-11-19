import React from "react";
import { FaHome, FaPlus, FaList, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-4 bg-gray-200 h-screen text-black">
      {/* Sidebar Title */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">Admin Sidebar</h1>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4">
        {/* <NavLink
          to={"/"}
          className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          <FaHome className="mr-3 border border-1 border-gray-500 p-1 rounded-full text-3xl" />
          <span>Home</span>
        </NavLink> */}
        <NavLink
          to={"/add"}
          className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          <FaPlus className="mr-3 border border-1 border-gray-500 p-1 rounded-full text-3xl" />
          <span>Add Item</span>
        </NavLink>
        <NavLink
          to={"/list"}
          className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          <FaList className="mr-3 border border-1 border-gray-500 p-1 rounded-full text-3xl" />
          <span>List Item</span>
        </NavLink>
        <NavLink
          to={"/users"}
          className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          <FaUsers className="mr-3 border border-1 border-gray-500 p-1 rounded-full text-3xl" />
          <span>All User</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
