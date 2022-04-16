import React from "react";
import logo from "./logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Navbar() {
  const toggleMenu = () => {
    const menu = document.querySelector("#mobile-menu");
    if (menu !== null) {
      menu.classList.toggle("hidden");
    }
  };
  return (
    <nav className="py-9 bg-bg-light px-2">
      <div className="container flex-wrap flex items-center mx-auto">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          className="ml-auto inline-flex items-center md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
          <FontAwesomeIcon className="hidden w-6 h-6" icon={faXmark} />
        </button>
        <div
          className="hidden w-full md:w-auto md:ml-12 md:flex md:items-center"
          id="mobile-menu"
        >
          <ul className="flex mt-4 md:mt-0 flex-col md:flex-row md:text-sm text-gray-light">
            <li className="p-4 border-b border-gray-300 md:border-0">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b border-gray-300 md:border-0">
              <a href="/">Features</a>
            </li>
            <li className="p-4 border-b border-gray-300 md:border-0">
              <a href="/">Service</a>
            </li>
            <li className="p-4 border-b border-gray-300 md:border-0">
              <a href="/">Listed</a>
            </li>
            <li className="p-4 border-b border-gray-300 md:border-0">
              <a href="/">Contract</a>
            </li>
          </ul>

          <div className="md:ml-[100%] flex-col md:flex-row flex md:items-center whitespace-nowrap">
            <a className="text-primary-dark font-medium p-4" href="/">
              Sign up
            </a>
            <a className="font-medium text-white primary-btn p-4" href="/">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
