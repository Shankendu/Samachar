import{ useState } from 'react';
import { NavLink } from "react-router-dom";
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative block lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-white"
      >
        <span className="sr-only">Open menu</span>
        <div className={`w-6 h-0.5 bg-white my-1 transition-all ${isOpen ? 'transform rotate-45' : ''}`} />
        <div className={`w-6 h-0.5 bg-white my-1 transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white my-1 transition-all ${isOpen ? 'transform -rotate-45' : ''}`} />
      </button>
      {isOpen && (
        <div className="relative top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-70">
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
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
