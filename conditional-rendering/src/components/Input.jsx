// jshint esversion:6

import React from "react";

function Input(props) {
	// return <input type=text placeholder="Username" />;
	// return <input type=password placeholder="Password" />;
	return <input type={props.type} placeholder={props.placeholder} />;
}

export default Input;
