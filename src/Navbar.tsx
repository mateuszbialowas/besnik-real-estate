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
    <nav className="bg-bg-light py-9 px-2">
      <div className="container mx-auto flex flex-wrap items-center">
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
          <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
          <FontAwesomeIcon className="hidden h-6 w-6" icon={faXmark} />
        </button>
        <div
          className="hidden w-full md:ml-12 md:flex md:w-auto md:items-center"
          id="mobile-menu"
        >
          <ul className="mt-4 flex flex-col text-gray-light md:mt-0 md:flex-row md:text-sm">
            <li className="border-b border-gray-300 p-4 md:border-0">
              <a href="/">Home</a>
            </li>
            <li className="border-b border-gray-300 p-4 md:border-0">
              <a href="/">Features</a>
            </li>
            <li className="border-b border-gray-300 p-4 md:border-0">
              <a href="/">Service</a>
            </li>
            <li className="border-b border-gray-300 p-4 md:border-0">
              <a href="/">Listed</a>
            </li>
            <li className="border-b border-gray-300 p-4 md:border-0">
              <a href="/">Contract</a>
            </li>
          </ul>

          <div className="flex flex-col whitespace-nowrap md:ml-[100%] md:flex-row md:items-center">
            <a className="p-4 font-medium text-primary-dark" href="/">
              Sign up
            </a>
            <a className="primary-btn p-4 font-medium text-white" href="/">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
