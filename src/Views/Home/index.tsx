import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/index";

import Dashboard from "../Dashboard/index";
import { useLocation } from "react-router-dom";
import { RootState, Shoes } from "../../Interfaces";
declare module "react-redux" {
  interface DefaultRootState {
    rootReducer: RootState;
  }
}

type RouteCategory = "M" | "F" | "A";
const Index = () => {
  const [data, setData] = useState<Shoes[]>();
  const shoes = useSelector((state) => state.rootReducer.shoes);
  const location = useLocation();
  const getDataFromStore = (category: RouteCategory) => {
    const filteredArray = shoes.filter((val) => val.category !== category);
    setData(filteredArray);
  };
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/men":
        getDataFromStore("F");
        break;
      case "/women":
        getDataFromStore("M");
        break;
      case "/home":
        getDataFromStore("A");
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <>
      <Navbar links={["Home", "Men", "Women"]} />
      <Dashboard data={data as Shoes[]} />
    </>
  );
};

export default Index;
