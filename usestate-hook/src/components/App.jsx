import React, { useState } from "react";



// function increment() {
//   count++;
//   console.log("I got clicked");
//   console.log(count);

// }


function App() {
  // var count = 0;

  // const state = useState(123);
  // console.log(state[0]);

  // rgb(9, 132, 227);
  // const rgb = [9, 132, 227];
  // const [red, green, blue] = [9, 132, 227];

  // const [count, setCount] = useState(0);

  // return <div className="container">
  //   <h1>{count}</h1>
  //   {/* <button onClick=>+</button> */}
  // </div >;

  const [count, setCount] = useState(0);

  function increase() {
    // setCount(123)
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
