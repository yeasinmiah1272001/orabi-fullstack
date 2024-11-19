// import React from "react";
import Header from "../Header";
import ServicesTag from "../ServicesTag";
import Footer from "../Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <ServicesTag />
      <Footer />
    </div>
  );
};

export default RootLayout;
