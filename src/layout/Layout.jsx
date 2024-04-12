import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../components/User/header/Header";
import { Navlink } from "../components/User/navlink/Navlink";

const Layout = () => {
  return (
    <>
      <Header />
      <Navlink />
      <Outlet />
    </>
  );
};

export default Layout;
