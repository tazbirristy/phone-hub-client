import React from "react";
import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <section
      className="dark:bg-gray-800 dark:text-gray-100 mt-3"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            PHONE
            <br />
            <span className="text-primary">HUB</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 ">
            We guarantee the best price for your old phone. Recycle your phone
            now for cash.
            <br className="hidden md:inline lg:hidden" />
            Fast & easy trade-in for used phones in any condition, with free
            postage.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={banner}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
