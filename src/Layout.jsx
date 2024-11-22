import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./componenets/Footer";
import Nav from "./componenets/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
