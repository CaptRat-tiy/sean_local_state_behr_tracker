"use strict";

import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../App.css';

import Footer from './Footer'


export default class NavBar extends React.Component{
  render(){
    return (
      <div>
        <header className="header">
          <img className="gifImage" src="../image/headerGifs/a-a-ron.gif" alt=""/>
          <h1>NAUGHTy IN MY CLASSROOM</h1>
        </header>
      </div>
    )
  }
}
