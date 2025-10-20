import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-lime-100 rounded-2xl flex justify-between my-10 sticky">
        <div className="">
          <a className=" text-2xl font-bold text-black">Mafia State</a>
        </div>
        <div className="text-black flex items-center gap-4 *:hover:bg-lime-400 *:hover:text-black font-semibold rounded text-lg *:px-4 *:py-2 *:rounded-2xl">
          <NavLink>Home</NavLink>
          <NavLink>Contacts</NavLink>
          <NavLink>Properties</NavLink>
          <NavLink>Loan</NavLink>
          <NavLink>Rent</NavLink>
        </div>
        <div className="flex gap-6 items-center">
          <button
            className="px-4 py-2 bg-lime-400 text-black font-semibold rounded-2xl text-lg"
            type="button"
          >
            Login
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
