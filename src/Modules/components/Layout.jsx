import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  // console.log(props)
  return (
    <main className=" flex flex-col min-h-[100vh]">
      <Navbar onSubmit={props.onSearchSubmit} />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
