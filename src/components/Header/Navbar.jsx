import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-base font-medium text-[#23BE0A] py-3 px-4 border-2 border-[#23BE0A] rounded-lg"
            : "py-3 px-4 text-base font-normal text-[#131313CC]"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/readlist"
        className={({ isActive }) =>
          isActive
            ? "text-base font-medium text-[#23BE0A] py-3 px-4 border-2 border-[#23BE0A] rounded-lg"
            : "text-base font-normal text-[#131313CC] py-3 px-4"
        }
      >
        Listed Books
      </NavLink>
      <NavLink
        to="/pageToRead"
        className={({ isActive }) =>
          isActive
            ? "text-base font-medium text-[#23BE0A] py-3 px-4 border-2 border-[#23BE0A] rounded-lg"
            : "text-base font-normal text-[#131313CC] py-3 px-4"
        }
      >
        Page to Read
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-4 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-2xl">BookWorm</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-3.5">{links}</ul>
      </div>
      <div className="navbar-end space-x-3.5 hidden md:flex">
        <a className="btn rounded-lg text-white font-semibold text-base bg-[#23BE0A]">
          Sign In
        </a>
        <a className="btn rounded-lg text-white font-semibold text-base bg-[#59C6D2]">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
