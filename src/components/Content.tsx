import React from "react";
import LeftSideBar from "./LeftSideBar";
import MainContent from "./MainContent";
import RightSideBar from "./RightSideBar";

function Content() {
  return (
    <div className="content">
      <LeftSideBar />
      <MainContent />
      <RightSideBar />
    </div>
  );
}

export default Content;
