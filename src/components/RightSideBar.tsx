import React from "react";
import {
  AiFillFacebook,
  FaTwitterSquare,
  AiFillLinkedin,
} from "react-icons/all";

function RightSideBar() {
  return (
    <div className="rightSideBar">
      <div className="more__details">
        <div>
          {" "}
          <a href="/#">Teams</a>
        </div>
        <div>
          {" "}
          <a href="/#">Packaging</a>
        </div>
        <div>
          {" "}
          <a href="/#">Manufaturing</a>
        </div>
      </div>
      <div className="social__links">
        <a href="/#">
          <AiFillFacebook />
        </a>
        <a href="/#">
          <FaTwitterSquare />
        </a>
        <a href="/#">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}

export default RightSideBar;
