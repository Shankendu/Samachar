/* eslint-disable react/prop-types */
import cross from "../assets/cross.png";
import Dropdown from "./Dropdown";
import { NavLink } from "react-router-dom";
export function Navbar() {
  const openMenu = () => {
    let hamMenu = document.getElementById("menu");
    hamMenu.classList.add("animate-slide-left");
    hamMenu.classList.remove("left-[100%]");
  };
  const closeMenu = () => {
    let hamMenu = document.getElementById("menu");
    hamMenu.classList.add("animate-slide-right");
    setTimeout(() => {
      hamMenu.classList.add("left-[100%]");
      hamMenu.classList.remove("animate-slide-right");
      hamMenu.classList.remove("animate-slide-left");
    }, 800);
  };

  return (
    <div >
      <header className="flex z-40 fixed py-3 w-full items-center bg-[#222831] text-[#EEEEEE] rounded-b-3xl">
        <div className="bg-clip-text bg-gradient-to-r from-[#EEEEEE] to-[#00ADB5] hover:bg-gradient-to-l cursor-pointer text-transparent ml-5 md:mr-8 text-lg sm:text-xl md:text-2xl flex-initial font-croissant">Samachar</div>
        <nav className="flex items-center flex-1 justify-end md:justify-start ">
          <ul className="flex items-center space-x-5 invisible md:visible md:text-lg pt-1 font-montserrat">
            <li className="hidden md:block">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hidden md:block" >About</li>
            <li className="hidden md:block">
              <Dropdown />
            </li>
          </ul>
          <div
            onClick={openMenu}
            id="ham"
            className="cursor-pointer absolute inline-flex flex-col items-center space-y-1 mr-5 h-fit w-fit rounded-full md:invisible"
          >
            <div className="h-[2px] rounded-full w-6 bg-[#00ADB5]"></div>
            <div className="h-[2px] rounded-full w-6 bg-[#00ADB5]"></div>
            <div className="h-[2px] rounded-full w-6 bg-[#00ADB5]"></div>
          </div>
         
        </nav>
      
      </header>
      
      <div
        id="menu"
        className=" z-40 h-full w-full bg-[#393E46] fixed top-0 left-[100%] md:invisible"
      >
        <img
          id="close"
          onClick={closeMenu}
          className="h-10 absolute top-4 right-4"
          src={cross}
          alt="close"
        />
        <div>
          <h1 className="text-lg sm:text-xl md:text-2xl text-[#070d17] mx-10 mt-16 border-b-2 border-[#070d17] pb-2 font-montserrat font-extrabold">
            <div className="h-2 w-2 rounded-full bg-black relative -left-4 top-[18px] "></div>
            Navigation
          </h1>

          <ul className="flex flex-col ml-10 pt-4 text-base sm:text-lg md:text-xl space-y-4 font-montserrat font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>About</li>
          </ul>
          <h1 className="text-lg sm:text-xl md:text-2xl text-[#070d17] mx-10 mt-5 border-b-2 border-[#070d17] pb-2  font-montserrat font-extrabold">
            <div className="h-2 w-2 rounded-full bg-black relative -left-4 top-[18px]"></div>
            Categories
          </h1>
          <ul className="flex flex-col ml-10 pt-4 text-base sm:text-lg md:text-xl space-y-4 font-montserrat font-medium ">
            <li>
              <NavLink to="/business">Business</NavLink>
            </li>
            <li>
              <NavLink to="/entertainment">Entertainment</NavLink>
            </li>
            <li>
              <NavLink to="/health">Health</NavLink>
            </li>
            <li>
              <NavLink to="/science">Science</NavLink>
            </li>
            <li>
              <NavLink to="/technology">Technology</NavLink>
            </li>
            <li>
              <NavLink to="/sports">Sports</NavLink>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-10 w-full">
          <h1 className="text-lg sm:text-xl md:text-2xl text-[#070d17] mx-10 border-b-2 border-[#070d17] pb-2 font-montserrat font-extrabold">
            <div className="h-2 w-2 rounded-full bg-black relative -left-4 top-[18px]"></div>
            Socials
          </h1>
          <ul className=" flex items-center justify-start text-base sm:text-lg md:text-xl space-x-5 mx-10 pt-4 font-montserrat font-medium">
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
