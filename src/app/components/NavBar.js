"use strict";

import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/App.css';

export default class NavBar extends React.Component{
  render(){
    return (
      <div>
         <h1>NavBar</h1>
         <Link to="/about"><p>About</p></Link>
         <Link to="/student"><p>Student</p></Link>

      </div>
    )
  }
}
