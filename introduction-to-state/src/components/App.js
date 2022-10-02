import React from "react";

var isDone = false;

function strike() {
	isDone = true;
	console.log("isDone is true")
}

function unStrike() {
	isDone = false;
	console.log("isDone is false");
}

function App() {
	return (
		<div>
			<p style={isDone ? { textDecoration: "line-through" } : null}>Buy Milk</p>
			<button onClick={strike}>Change to strike through</button>
			<button onClick={unStrike}>Change back</button>
		</div>
	);
}

export default App;