import React from "react";
import buyer_guide_img from "../images/buyer_guide.svg";
import renters_guide_img from "../images/renters_guide.svg";
import seller_guide_img from "../images/seller_guide.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-2 text-center">
      <div className="mx-auto h-1 w-10 rounded-sm bg-primary-dark" />
      <h2 className="py-3 text-4xl font-semibold text-primary-dark">
        How its works?
      </h2>
      <p className="mx-auto max-w-md text-gray-light">
        Everything you need to know when you're looking to buy, rent, or sell -
        all in one place.
      </p>
      <div className="flex flex-col gap-20 py-8 sm:flex-row sm:justify-between md:mx-auto md:mt-8 md:max-w-2xl">
        <div>
          <img className="mx-auto" src={buyer_guide_img} alt="Buyer Guide" />
          <h3 className="py-2 text-xl font-medium text-secondary-dark">
            Buyer Guides
          </h3>
          <div className="flex items-center justify-center">
            <a className="font-semibold text-blue-primary" href="/">
              How to buy
            </a>
            <FontAwesomeIcon
              className="px-2 text-xl text-blue-primary"
              icon={faArrowRightLong}
            />
          </div>
        </div>
        <div>
          <img className="mx-auto" src={renters_guide_img} alt="Buyer Guide" />
          <h3 className="py-2 text-xl font-medium text-secondary-dark">
            Renter Guides
          </h3>
          <div className="flex items-center justify-center">
            <a className="font-semibold text-blue-primary" href="/">
              How to rent
            </a>
            <FontAwesomeIcon
              className="px-2 text-xl text-blue-primary"
              icon={faArrowRightLong}
            />
          </div>
        </div>
        <div>
          <img className="mx-auto" src={seller_guide_img} alt="Buyer Guide" />
          <h3 className="py-2 text-xl font-medium text-secondary-dark">
            Seller Guides
          </h3>
          <div className="flex items-center justify-center">
            <a className="font-semibold text-blue-primary" href="/">
              How to sell
            </a>
            <FontAwesomeIcon
              className="px-2 text-xl text-blue-primary"
              icon={faArrowRightLong}
            />
          </div>
        </div>
      </div>
      <a
        className="primary-btn-big mt-12 inline-block py-3 px-5 lg:py-4 lg:px-10"
        href="/"
      >
        Sell Full Guidelines
      </a>
    </div>
  );
}
