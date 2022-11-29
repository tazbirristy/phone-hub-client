import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import CustomerReview from "../CustomerReview/CustomerReview";
import GetUpdate from "../AppStore/AppStore";
import Advertisement from "../Advertisement/Advertisement";

const Home = () => {
  return (
    <div>
      <Advertisement></Advertisement>
      <Banner></Banner>
      <Categories></Categories>
      <GetUpdate></GetUpdate>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
