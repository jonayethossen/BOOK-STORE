import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"} className="hover:text-[#00a86b] transition-colors">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Catalogue"}
          className="hover:text-[#00a86b] transition-colors"
        >
          Catalogue
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Gallery"}
          className="hover:text-[#00a86b] transition-colors"
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Members"}
          className="hover:text-[#00a86b] transition-colors"
        >
          Members
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="navbar bg-[#121212] text-white shadow-lg border-b border-gray-800 px-4 md:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1e1e1e] rounded-box z-1 mt-3 w-52 p-4 shadow-2xl border border-gray-700 font-bold space-y-2"
            >
              {links}
            </ul>
          </div>
          {/* Brand Logo/Title */}
          <a className="btn btn-ghost text-xl font-extrabold tracking-tighter text-[#00a86b]">
            <span className="text-[#00a86b]">BOOK</span>
            <span className="text-white">STORE</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-sm uppercase tracking-wider space-x-2">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <NavLink
            to={"/login"}
            className="btn bg-[#00a86b] hover:bg-[#008f5a] border-none text-white btn-sm px-6"
          >
            Login
          </NavLink>
          <NavLink
            to={"/register"}
            className="btn bg-[#00a86b] hover:bg-[#008f5a] border-none text-white btn-sm px-6"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
