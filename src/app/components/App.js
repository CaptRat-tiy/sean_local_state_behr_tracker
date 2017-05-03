"use strict";

import React from 'react';

import styles from '../styles/App.css';




export default class App extends React.Component {

  render () {
    return (
      <div id="layout">
        <Header />
        <div className="main">

          <Main
          />
        </div>
        <footer>THIS IS THE FOOTER.  Don't judge!</footer>
      </div>
    )
  }
}
