// jshint esversion:6
import React, { useState } from "react";

function App() {
  const [headerText, setHeaderText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    // console.log("clicked");
    setHeaderText("Submitted");
  }

  function handleMouseOver() {
    // console.log("Moused Over");
    setMouseOver(true);
    // setHeaderText("Enter button");
  }

  function handleMouseOut() {
    // console.log("Moused Out");
    setMouseOver(false);
    // setHeaderText("Leave button");
  }

  return (
    <div className="container">
      <h1>{headerText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
