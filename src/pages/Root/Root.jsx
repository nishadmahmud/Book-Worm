import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import ScrollRestoration from "../../utility/ScrollRestoration";

const Root = () => {
  return (
    <div className="work-sans">
      <div className="w-[95%] md:w-[80%] m-auto">
        <Navbar></Navbar>
        <ScrollRestoration></ScrollRestoration>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
