"use strict";

import React from 'react';

import styles from '../App.css';

import App from './App';
import About from './About';
import NavBar from './NavBar';
import Student from './Student'
import { BrowserRouter, Route, Link } from 'react-router-dom'

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
