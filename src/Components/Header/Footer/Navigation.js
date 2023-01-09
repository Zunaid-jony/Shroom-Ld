import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [isSticky, setSticky] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header
      className={` top-0 w-full fixed z-40  ${
        !isSticky ? " bg-transparent" : "scrolled"
      }`}
    >
      {/* max-w-[1536px]    max-w-[1240px] */}
      <div className="flex justify-between items-center  max-w-[1536px] mx-auto px-4 shadow-sm container ">
        <div className="     text-left    flex justify-between">
          {/* <p className="w-full text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500">
            DIU SMART
          </p> */}

          {/* <img className=" w-40 h-16 py-3" src="https://i.ibb.co/7YMsM83/main-Logos-removebg-preview.png" alt="" />{" "} */}
        </div>
        <ul className="hidden md:flex ">
          <NavLink to="/" className="p-4 hover:text-[#61dafb]">
            {/* #61dafb */}
            Home
          </NavLink>
          <NavLink to="/contract" className="p-4 hover:text-[#61dafb]">
            About Us
          </NavLink>
          <NavLink to="/blog" className="p-4 hover:text-[#61dafb]">
            Projects
          </NavLink>
          <NavLink to="/about" className="p-4 hover:text-[#61dafb]">
            Contact
          </NavLink>
        

        </ul>

      
          <p className="flex">
            {" "}
            {/* <span className="mt-2"> Md Jony </span>{" "} */}
            {/* <img
              className="ml-2 rounded-full w-8 h-8"
              src="https://i.ibb.co/N7N2wL1/274614649-3098589300383211-4560155483921787883-n.jpg"
              alt=""
            />{" "} */}
          </p>
      

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "z-100 text-white font-bold  overflow-auto h-100 text-left fixed left-0 top-0 md:w-[20%] w-[60%] h-full border-r  bg-[#0a2357] ease-in-out duration-500 block md:hidden "
              : "ease-in-out duration-500 fixed left-[-100%] "
          }
        >
          <div className="flex bg-white">
            <h1 className="  w-full text-3xl font-bold text-[#00df9a] m-5 mt-8  bg-gradient-to-r text-transparent bg-clip-text from-green-500 to-blue-600 hover:from-pink-500 hover:to-yellow-500">
              {/* <img src={logo} className="w-24" alt="" /> */}
            </h1>
            <h1 className="mt-10 text-black" onClick={handleNav}>
              {" "}
              <AiOutlineClose size={20} />
            </h1>
          </div>

          <li className="p-4 border-b border-gray-600 hover:text-[#61dafb]">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#61dafb]">
            <NavLink to="/listing">Listing</NavLink>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#61dafb]">
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className="p-4 border-b border-gray-600 hover:text-[#61dafb]">
            <NavLink to="/about">About</NavLink>
          </li>

          

          <NavLink to="/login" className="p-4 hover:text-[#61dafb]">
            Login
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
