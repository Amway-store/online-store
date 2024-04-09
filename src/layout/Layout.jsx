import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../compoents/header/Header";
import { Navlink } from "../compoents/navlink/Navlink";

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
