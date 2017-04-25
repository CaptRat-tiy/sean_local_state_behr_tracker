"use strict";

import React from 'react';

import styles from '../styles/App.css';
import Main from './Main';
import Header from './Header';
import blogData from './allblogdata.json';


export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
      {
        blogData.map((c,i,a) => {
          return (
            <div key={i} className="sidebar">
              <h6>{c.tags}</h6>
            </div>
        )})
      }
      </div>
    )
  }
}
