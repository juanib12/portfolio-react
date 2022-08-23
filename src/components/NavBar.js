import { useState } from "react";
import JB from "../images/jb.png";

const NavBar = () => {
  return (
    <nav className="sm:px-28 py-2.5 top-0 sticky z-[100] bg-[#0F1729] opacity-[97%]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center  space-x-2">
          <img src={JB} width="40px" className="rounded-xl" />
          <span className="self-center text-xl font-medium whitespace-nowrap dark:text-white">
            Juan Bianco
          </span>
        </a>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white text-base rounded md:bg-transparent f md:p-0 hover:text-gray-400"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-400 block py-2 pr-4 pl-3 text-white border-b text-base hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Sobre mí
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-400 block py-2 pr-4 pl-3 text-white border-b text-base hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-400 block py-2 pr-4 pl-3 text-white border-b text-base hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
