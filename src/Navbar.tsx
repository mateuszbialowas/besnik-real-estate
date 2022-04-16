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
    // <div className="bg-bg-light">
    //   <nav className="container mx-auto py-9 flex items-center">
    //     <div className="logo">
    //       <a href="/">
    //         <img src={logo} alt="logo" />
    //       </a>
    //     </div>
    //     <button className="toggler">
    //       <FontAwesomeIcon className="text-3xl" icon={faBars} />
    //     </button>
    //     <div className="nav-menu ml-12">
    //       <ul className="flex gap-7 text-sm text-gray-light ">
    //         <li>
    //           <a href="/">Hone</a>
    //         </li>
    //         <li>
    //           <a href="/">Fratures</a>
    //         </li>
    //         <li>
    //           <a href="/">Service</a>
    //         </li>
    //         <li>
    //           <a href="/">Listed</a>
    //         </li>
    //         <li>
    //           <a href="/">Contract</a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="ml-auto flex gap-7 items-center">
    //       <a className="text-primary-dark font-medium" href="/">
    //         Sign up
    //       </a>
    //       <a className="font-medium text-white primary-btn" href="/">
    //         Register
    //       </a>
    //     </div>
    //   </nav>
    // </div>
    <nav className="py-9 bg-bg-light px-2">
      <div className="container flex items-center mx-auto">
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
        <div className="nav-menu ml-12 hidden md:block" id="mobile-menu">
          <ul className="flex gap-7 text-sm text-gray-light">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/">Listed</a>
            </li>
            <li>
              <a href="/">Contract</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
