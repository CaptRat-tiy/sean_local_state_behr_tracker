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
      tags: [],
    }
  }
  render () {
    return (
      <div>
        <Header />
        <Sidebar blogData = {blogData}/>
        <main className="main">
            <Main />
        </main>
        <footer>THIS IS THE FOOTER.  Don't judge!</footer>
      </div>
    )
  }
}
