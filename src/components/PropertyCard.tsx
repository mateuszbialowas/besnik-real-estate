import React from "react";
import bed_icon from "../images/bed_icon.svg";
import bath_icon from "../images/bath_icon.svg";
import sqft_icon from "../images/sqft_icon.svg";
export default function PropertyCard({
  price = 0,
  address = "",
  image = "",
  nrOfBeds = 0,
  nrOfBaths = 0,
  sqft = 0,
  id = 0,
}) {
  return (
    <div data-propery-id={id} className="max-w-sm rounded-t-xl px-2">
      <img className="" src={image} alt={"House preview" + address} />
      <div className="px-2 py-3">
        <div className="prize">
          <span className="text-xl font-semibold text-primary-dark">
            ${price}
          </span>
        </div>
        <div className="address">
          <span className="text-sm font-medium text-gray-secondary">
            {address}
          </span>
        </div>
        <div className="flex flex-nowrap justify-between py-5">
          <div className="beds flex gap-2">
            <img className="color-blue-primary" src={bed_icon} alt="bed icon" />
            {nrOfBeds} Beds
          </div>
          <div className="flex gap-2">
            <img
              className="color-blue-primary"
              src={bath_icon}
              alt="both icon"
            />
            {nrOfBaths} both
          </div>
          <div className="flex gap-2">
            <img
              className="color-blue-primary"
              src={sqft_icon}
              alt="sqfr icon"
            />
            {sqft} Sqfr
          </div>
        </div>
      </div>
    </div>
  );
}
