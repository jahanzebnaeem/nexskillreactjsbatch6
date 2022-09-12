// jshint esversion:6
import React from "react";
import ReactDOM from "react-dom";
// import Header from "./Header";
// import List from "./List";
import App from './components/App';

// function Header() {
//   return <h1>My Favourite Foods</h1>;
// }

ReactDOM.render(
  <div>
    <App />
    {/* <h1>My Favourite Foods</h1> */}
    {/* <Header /> */}
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
    {/* <List /> */}
  </div>,
  document.getElementById("root")
);
