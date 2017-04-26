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
          <div className="main">
            <Sidebar blogData = {blogData}/>
            <Main />
            {
              blogData.map((c,i,a) => {
                return (
                  <div key={i} className="sidebar">
                    <h6>{c.tags}</h6>
                  </div>
                  )
                })
            }
        </div>
        <footer>THIS IS THE FOOTER.  Don't judge!</footer>
      </div>
    )
  }
}
