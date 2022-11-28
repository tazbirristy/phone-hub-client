import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Home/Shared/Footer/Footer";
import Header from "../../pages/Home/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
