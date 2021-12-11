import React from "react";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <div className="scroll__down">Scroll Down</div>
    </>
  );
}

export default App;
