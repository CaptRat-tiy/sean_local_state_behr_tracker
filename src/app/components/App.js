"use strict";

import React from 'react';

import styles from '../styles/App.css';
import Main from './Main';
import Header from './Header';
import blogData from './allblogdata.json';
import Sidebar from './Sidebar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: blogData,
      sidebarSelectCategory: "",
      sidebarSelectText: "",

    }
  }
  render () {
    console.log(this.state.blogData);
    return (
      <div id="layout">
        <Header />
        <div className="main">
          <Sidebar blogData = {this.state.blogData} />
          <Main blogData = {blogData} />
        </div>
        <footer>THIS IS THE FOOTER.  Don't judge!</footer>
      </div>
    )
  }
}
