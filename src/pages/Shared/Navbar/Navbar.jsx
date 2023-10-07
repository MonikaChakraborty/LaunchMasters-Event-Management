import { Link, NavLink } from "react-router-dom";
import profilePic from "../../../assets/profile.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-700 bg-slate-200 text-lg font-medium"
              : "text-lg font-medium"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-700 bg-slate-200 text-lg font-medium"
              : "text-lg font-medium"
          }
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/resources"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-700 bg-slate-200 text-lg font-medium"
              : "text-lg font-medium"
          }
        >
          Resources
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-300 p-5 rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox=""
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h3 className="normal-case text-4xl font-semibold text-blue-700">
          Launch<span className="text-yellow-700">Masters</span>
        </h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
          <div className="w-10 rounded-full">
            <img src={profilePic} />
          </div>
        </label>
        <Link>
          <button className="btn text-lg font-medium bg-slate-200">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
