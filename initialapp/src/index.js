// jshint esversion:6

// var React = require('react');
// var ReactDOM = require('react-dom');

import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Zain';
const lName = 'Ul Abdin';
const age = 21;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>I am {age} years old</p>
  </div>
  , document.getElementById('root')
);

// var h1 = document.createElement('h1');
// h1.innerHTML = 'Hello World';
// document.getElementById('root').appendChild(h1);

