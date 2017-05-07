"use strict";

import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/App.css';

export default class NavBar extends React.Component{
  render(){
    return (
      <div>
        <header className="headerProp">
          <h1>Behavior Tracking App (header)</h1>
           <h1>NavBar</h1>
           <Link to="/about"><p>About</p></Link>
           <h3 classname="studentName">Name of Student</h3>
           <Link to="/student"><p>Student</p></Link>
        </header>
      </div>
    )
  }
}
