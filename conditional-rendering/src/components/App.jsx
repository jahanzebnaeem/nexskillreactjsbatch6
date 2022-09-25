// jshint esversion:6

import React from "react";
import Login from "./Login";

var isLoggedIn = false;

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>
//   } else {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="container">
//       {renderConditionally()}
//     </div>
//   );
// }

const currentTime = new Date(2022, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div >
  );
}

export default App;
