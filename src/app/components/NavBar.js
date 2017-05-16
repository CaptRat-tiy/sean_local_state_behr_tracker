"use strict";

import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer'

import styles from '../App.css';

export default class NavBar extends React.Component{
  render(){
    return (
      <div>
        <header className="header">
          <div className="gif">
            <p></p>
          </div>
          <div className="headerText">
          <h1>Behavior Tracking App ('navbar component')</h1>
            <Link to="/about"><p>About</p></Link>
            <Link to="/student"><p>Student</p></Link>
          </div>
        </header>
      </div>
    )
  }
}
