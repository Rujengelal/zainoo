import React from "react";
import { FaSearch, BsBasket2, CgProfile } from "react-icons/all";
function Navbar() {
  return (
    <nav>
      <div className="logo">Zainoo</div>
      <ul className="top-nav">
        <li className="nav__item">
          <FaSearch />
        </li>
        <li className="nav__item">
          <BsBasket2 />
        </li>
        <li className="nav__item">
          <CgProfile />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
