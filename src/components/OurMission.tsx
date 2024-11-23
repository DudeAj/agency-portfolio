import React from "react";

const OurMission = () => {
  return (
    <div className="flex justify-center mt-24 md:mt-52">
      <div className="w-11/12 md:w-10/12 rounded-2xl border border-blue-light p-1">
        <div className="px-0 md:px-24 py-10 md:py-28 rounded-xl border border-dark-blue-2">
          <h1 className="text-3xl md:text-6xl font-semibold text-white text-center tracking-wide leading-tight">
            Our mission is to design websites that attract and engage customers.
          </h1>
          <p className="text-lg text-neutral-dark mt-6 text-center">
            However, we approach things a bit differently around here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
