import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// var count = 0;

// function increment() {
//   count++;
//   console.log("I got clicked");
//   console.log(count);
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increment}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
// }

// ReactDOM.render(
//   <div className="container">
//     <h1>{count}</h1>
//     <button onClick={increment}>+</button>
//   </div>,
//   document.getElementById("root")
// );


ReactDOM.render(
  <App />,
  document.getElementById("root")
);
