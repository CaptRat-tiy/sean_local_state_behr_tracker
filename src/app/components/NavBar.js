"use strict";

import React from 'react';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
import styles from '../App.css';
=======
>>>>>>> finalweek
import Footer from './Footer'

import styles from '../App.css';

export default class NavBar extends React.Component{
  render(){
    return (
        <header>
          <div className="gifImage">
            <img src="./../image/headerGifs/a-a-ron.gif" />
          </div>
          <div className="content">
            <h1>Behavior Tracking App ('navbar component')</h1>
            <Link to="/about"><p>About</p></Link>
            <Link to="/student"><p>Student</p></Link>
          </div>  
        </header>
    )
  }
}
