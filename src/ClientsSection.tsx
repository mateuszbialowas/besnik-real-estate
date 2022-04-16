import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import logo1 from "./logo-comapny1.svg";
import logo2 from "./logo-comapny2.svg";
import logo3 from "./logo-comapny3.svg";
import logo4 from "./logo-comapny4.svg";
import logo5 from "./logo-comapny5.svg";

export default function ClientsSection() {
  const nrOfStars = 5;
  const stars = [];
  for (let i = 0; i < nrOfStars; i++) {
    stars.push(
      <FontAwesomeIcon
        className="inline-block py-2 text-yellow-500 "
        key={i}
        icon={faStar}
      />
    );
  }

  return (
    <div className="container mx-auto py-8 px-2 sm:py-32">
      <div className="flex flex-col justify-between text-center sm:flex-row sm:text-left">
        <div className="flex flex-col justify-between">
          <h2 className="py-2 text-2xl sm:text-xl">Besnik</h2>
          <p className="text-gray-light">
            More than 45,000+ companies trust besnik
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>{stars}</div>
          <p className="text-gray-light">5 Star Rating (2k+ Review)</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 py-8 sm:py-24 lg:justify-between">
        <img className="sm:h-10" src={logo1} alt="" />
        <img className="sm:h-10" src={logo2} alt="" />
        <img className="sm:h-10" src={logo3} alt="" />
        <img className="sm:h-10" src={logo4} alt="" />
        <img className="sm:h-10" src={logo5} alt="" />
      </div>
    </div>
  );
}
