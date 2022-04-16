import React from "react";
import house_illustration from "./house illustration.svg";

export default function Header() {
  return (
    <header className=" bg-bg-light px-2">
      <div className="container mx-auto flex-wrap items-center text-center md:flex md:flex-nowrap md:text-left">
        <div className="container mx-auto">
          <div className="font-medium text-gray-light">
            Welcome to Besnik Agency
          </div>
          <h1 className="py-4 text-4xl font-bold md:text-4xl lg:text-6xl">
            Discover a place <br /> you'will love to live.
          </h1>
          <p className="my-4 text-gray-light lg:my-6">
            Get the best real estate deals first, before they hit the mass{" "}
            <br /> market! HOT FORECLOSURE DEALS with one simple search
          </p>
          <a
            className="primary-btn-big inline-block py-2 px-5 lg:py-4 lg:px-10"
            href="/"
          >
            More About Us
          </a>
        </div>
        <div className="mx-auto mt-8 w-2/4 md:mt-0 md:w-3/4">
          <img src={house_illustration} alt="" />
        </div>
      </div>
    </header>
  );
}
