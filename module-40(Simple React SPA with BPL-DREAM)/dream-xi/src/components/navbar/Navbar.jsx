// import React from 'react';

import logo from "../../../public/assets/logo.png";

const Navbar = ({balance}) => {
  return (
    <div className="mb-4">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <img className="w-12" src={logo} alt="Best XI logo" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <p className=" border border-gray-400 px-3 py-1 rounded-lg">
            $<span>{balance}</span> Coin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
