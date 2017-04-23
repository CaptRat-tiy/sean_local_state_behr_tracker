"use strict";

import React from 'react';

import styles from '../styles/App.css';
import Nav from './Nav'

export default class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Patrick's Blog</h1>
        <Nav />
      </div>
    )
  }
}
