/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
export function Dropdown() {
  const handleDropdown = () => {
    let dropBtn = document.getElementById("dropdown");
    dropBtn.classList.toggle("hidden");
    dropBtn.classList.toggle("md:hidden");
  };

  return (
    <div>
      <button
        onClick={handleDropdown}
        className=" rounded-lg md:text-lg inline-flex items-center font-montserrat"
        type="button"
      >
        Categories
        <svg
          className="w-2.5 h-2.5 ml-2.5 mt-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className="absolute z-50 top-12 md:hidden hidden bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul className="py-2  text-sm text-gray-700 dark:text-gray-200 font-montserrat">
          <li>
            <NavLink
              to="/business"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entertainment"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/health"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Health
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/science"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Science
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sports
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
