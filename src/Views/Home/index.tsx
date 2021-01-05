import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/index";
const Index = () => {
  return (
    <>
      <Navbar links={["", "Men", "Women"]} />
      <Outlet />
    </>
  );
};

export default Index;
