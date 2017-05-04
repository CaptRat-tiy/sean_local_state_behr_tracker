"use strict";

import React from 'react';

import styles from '../styles/App.css';
import App from './App';
import About from './About';
import NavBar from './NavBar';
import { BrowserRouter, Route, Link } from 'react-router-dom'

console.log(BrowserRouter);

export default class Routing extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <div>
        <NavBar />
          <Route exact path="/" component={App} />

        </div>

      </BrowserRouter>
    )
  }
}
//
// export const Routing = () => {
//   return (
//     <BrowserRouter>
//       <NavBar />
//
//     </BrowserRouter>
//   )
// }

// <Match pattern="/about" component={About} />
// <div>
//   <Match exactly pattern="/" component={App} />
// </div>
