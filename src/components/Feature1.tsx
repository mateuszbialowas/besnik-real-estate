import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import PropertyCard from "./PropertyCard";
import house1_img from "../images/house1.png";
import house2_img from "../images/house2.png";
import house3_img from "../images/house3.png";

export default function Feature1() {
  return (
    <div className="container mx-auto px-2 py-4">
      <h2 className="py-4 text-center text-2xl font-semibold text-primary-dark md:py-8 md:text-left md:text-4xl">
        Featured Properties
      </h2>
      <div className="md:align-center mb-4 text-center md:flex md:justify-between">
        <p className="">Everything you need to know when you're looking</p>
        <div className="flex items-center justify-center pt-4 md:pt-0">
          <a className="font-semibold text-blue-primary" href="/">
            View all properties
          </a>
          <FontAwesomeIcon
            className="px-2 text-xl text-blue-primary"
            icon={faArrowRightLong}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-3 py-4 md:justify-between md:py-8">
        <PropertyCard
          price={35000}
          address="8502 Preston Rd. Inglewood, Maine 98280"
          image={house1_img}
          nrOfBeds={3}
          nrOfBaths={2}
          sqft={2000}
          id={1}
        />
        <PropertyCard
          price={35000}
          address="8502 Preston Rd. Inglewood, Maine 98280"
          image={house2_img}
          nrOfBeds={3}
          nrOfBaths={2}
          sqft={1000}
          id={2}
        />
        <PropertyCard
          price={35000}
          address="8502 Preston Rd. Inglewood, Maine 98280"
          image={house3_img}
          nrOfBeds={3}
          nrOfBaths={2}
          sqft={2000}
          id={3}
        />
      </div>
    </div>
  );
}
