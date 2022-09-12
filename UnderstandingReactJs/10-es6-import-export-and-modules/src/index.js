import React from "react";
import ReactDOM from "react-dom";
// import Pi, { sqPi, cubPi } from "./math";
import * as Pi from './math';

ReactDOM.render(
  <ul>
    <li>{Pi.default}</li>
    <li>{Pi.sqPi()}</li>
    <li>{Pi.cubPi()}</li>
  </ul>,
  document.getElementById("root")
);
