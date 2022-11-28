import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import CustomerReview from "../CustomerReview/CustomerReview";
import GetUpdate from "../AppStore/AppStore";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <GetUpdate></GetUpdate>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
