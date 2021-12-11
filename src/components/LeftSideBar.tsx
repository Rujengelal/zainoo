import React from "react";

function LeftSideBar() {
  return (
    <div className="leftSideBar">
      <div className="items__categories">
        <ul>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Bags</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>

      {/* Extra foot tech */}
      {/* <div className="foot__care">Extra Foot Care Tech</div> */}
    </div>
  );
}

export default LeftSideBar;
