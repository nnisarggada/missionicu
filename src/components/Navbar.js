import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  try {
    if (showMenu) {
      document.getElementById("menu").classList.remove("-right-full");
      document.getElementById("menu").classList.add("right-0");
    } else {
      document.getElementById("menu").classList.remove("right-0");
      document.getElementById("menu").classList.add("-right-full");
    }
  } catch (error) {}

  const MenuLink = ({ text, link }) => {
    return (
      <a
        href={link}
        onClick={() => {
          setShowMenu(false);
        }}
        className="h-16 flex justify-center items-center w-full text-2xl font-bold border-solid border-2 border-brand-200"
      >
        {text}
      </a>
    );
  };

  return (
    <div className="fixed top-0 left-0 z-30 w-full h-20 flex items-center justify-between bg-brand-500 text-gray-100 px-4">
      <img
        onClick={() => window.scrollTo(0, 0)}
        src={require("../assets/images/logo-light.png")}
        alt="Mission ICU Logo"
        className="h-full"
      />
      <MdMenu
        className="text-4xl"
        onClick={() => {
          setShowMenu(true);
        }}
      />
      <div
        id="menu"
        className="absolute top-0 -right-full h-screen w-72 flex flex-col bg-brand-400 p-6 transition-all duration-500"
      >
        <div className="flex justify-end mb-10 -mr-2">
          <MdClose className="text-4xl" onClick={() => setShowMenu(false)} />
        </div>
        <div className="h-full flex flex-col justify-between items-center">
          <div className="w-full flex flex-col items-center gap-4 text-2xl font-bold">
            <MenuLink text="Home" link="/#home" />
            <MenuLink text="Nominate" link="/#nominate" />
            <MenuLink text="Impact" link="/#impact" />
          </div>
          <a
            href="/hospitals"
            className="h-16 flex justify-center items-center w-full text-2xl font-bold bg-brand-100 text-brand-700"
          >
            For Hospitals
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
