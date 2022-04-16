import React from "react";
import house4_img from "../images/house4.png";

export default function Feature2() {
  return (
    <div className="container mx-auto py-4 md:py-8">
      <div className="flex flex-col">
        <div className="separator mx-auto h-1 w-10 rounded-sm bg-primary-dark" />
        <h2 className="py-6 text-center text-2xl font-semibold text-primary-dark md:text-4xl lg:text-left max-w-md mx-auto lg:max-w-none">
          You’ve found a neighborhood you love.
        </h2>
        <p className="mx-auto max-w-md text-gray-light text-center">
          When you own a home, you’re committing to living in one location for a
          while. In a recent Trulia survey, we found that five out of six
          respondents said finding the right neighborhood
        </p>
        <img className="max-w-md mx-auto" src={house4_img} alt="" />
      </div>
    </div>
  );
}
