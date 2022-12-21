import React from "react";

const About = () => {
  return (
    <section
      className="dark:bg-gray-800 dark:text-gray-100 mt-12 mb-12"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-primary">
              <h3 className="text-3xl font-semibold text-primary">
                About PHONE HUB
              </h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Guarantee the best price for your old phone.{" "}
                </h3>

                <p className="mt-3">Help recycle your phone now for cash.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Fast & easy trade-in for used phones in any condition.
                </h3>

                <p className="mt-3">Free Postage.</p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-primary">
                <h3 className="text-xl font-semibold tracking-wide">
                  Reliable and Trustworthy Service.
                </h3>

                <p className="mt-3">One week refundable guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
<h1>About</h1>;
