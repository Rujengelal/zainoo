import React from "react";
import { MdShoppingBag, AiOutlinePlayCircle } from "react-icons/all";

function MainContent() {
  return (
    <div className="mainContent">
      <div className="product__info">
        <div className="product__tagline">The best looks; Top Comfort</div>
        <h1>Comfy Maxer</h1>
        <div className="product__details">
          Our shoes fuse together an insole that cushions every move, laces that
          you’ll never need to tie again, and an odor-fighting copper thread
          lining.
        </div>
        <div className="button__group">
          <button>
            <MdShoppingBag />
            Add To Cart
          </button>
          <button>
            <AiOutlinePlayCircle />
            Watch Intro
          </button>
        </div>
      </div>
      <img src="images/shoe.png" alt="shoe" />
      <div className="pages">01 / 04</div>
      <p>94</p>
    </div>
  );
}

export default MainContent;
