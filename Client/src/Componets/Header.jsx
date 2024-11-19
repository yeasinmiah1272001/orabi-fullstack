import React, { useState } from "react";
import Container from "./Container";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa"; // Importing icons
import { logo } from "../assets/images";
import { navlink } from "../Constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu on click
  };

  const { cart } = useSelector((state) => state.orabi);
  // console.log("sele", cart);

  return (
    <div className="border-b-2 sticky top-0  z-40 border-slate-100  py-2 bg-white shadow-md">
      {/* Main Container */}
      <Container className="flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <img src={logo} alt="Logo" className="w-14 h-auto" />
        </Link>

        {/* Search Bar */}
        <div className="relative w-1/2 hidden md:flex items-center">
          <input
            className="p-2 bg-gray-100 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-all"
            type="text"
            placeholder="Search here..."
          />
          <FaSearch className="absolute right-4 text-gray-500" />
        </div>

        {/* Icons and Menu */}
        <div className="flex items-center gap-4">
          {/* Menu Icon for Mobile */}
          <FaBars
            size={30}
            className="text-gray-700 cursor-pointer md:hidden"
            onClick={toggleMenu}
          />

          {/* Links and Icons Section for Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navlink.map((item, index) => (
                <Link
                  to={item.link}
                  className="relative group cursor-pointer text-gray-700 hover:text-blue-600 transition-all"
                  key={index}
                >
                  {item.title}
                  {/* Underline Animation */}
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></span>
                </Link>
              ))}
            </div>

            {/* Cart Section */}
            <Link to="/cart" className="relative flex items-center gap-2">
              <FaShoppingCart size={30} className="text-gray-700" />
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center transform translate-x-3 -translate-y-2">
                {cart.length > 0 ? cart.length : "0"}
              </span>
            </Link>

            {/* User Icon */}
            <FaUser
              size={30}
              className="text-gray-700 hover:text-blue-600 cursor-pointer transition-all"
            />
          </div>
        </div>
      </Container>

      {/* Mobile Search Bar */}
      <Container className="md:hidden flex justify-between items-center py-2">
        <div className="relative w-full">
          <input
            className="p-2 bg-gray-100 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-all"
            type="text"
            placeholder="Search here..."
          />
          <FaSearch className="absolute right-4 top-3 text-gray-500" />
        </div>
      </Container>

      {/* Mobile Menu - Shown when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <Container className="flex flex-col items-center gap-4">
            {/* Close Icon for Mobile */}
            <FaTimes
              size={30}
              className="text-gray-700 cursor-pointer mb-4"
              onClick={toggleMenu}
            />

            {/* Mobile Links */}
            {navlink.map((item, index) => (
              <p
                className="text-gray-700 hover:text-blue-600 transition-all cursor-pointer"
                key={index}
                onClick={toggleMenu} // Close menu on link click
              >
                {item.title}
              </p>
            ))}

            {/* Cart and User Icon for Mobile */}
            <div className="flex items-center gap-8 mt-4">
              <div className="relative flex items-center gap-2">
                <FaShoppingCart size={30} className="text-gray-700" />
                <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center transform translate-x-3 -translate-y-2">
                  00
                </span>
              </div>

              <FaUser
                size={30}
                className="text-gray-700 hover:text-blue-600 cursor-pointer transition-all"
              />
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Header;
