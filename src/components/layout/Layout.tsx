import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import { LayoutContainer } from "./Layout.style";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
