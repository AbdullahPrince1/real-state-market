import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export default function Navbar() {
  const { user, logOutUser } = use(AuthContext);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast("Log Out Successful");
      })
      .catch((err) => {
        toast("Log Out error:", err);
      });
  };
  return (
    <>
      <div className="navbar bg-lime-100 rounded-2xl flex justify-between my-10 sticky">
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
              },
            },
            error: {
              style: {
                background: "red",
              },
            },
          }}
        />
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
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
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
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/auth/login"
              className="px-4 py-2 bg-lime-400 text-black font-semibold rounded-2xl text-lg"
              type="button"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}
