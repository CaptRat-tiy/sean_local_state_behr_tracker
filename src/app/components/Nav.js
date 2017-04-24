"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Nav extends React.Component {
  render () {
    return (
      <ul className="nav">
        <li><a href="#">Blog Posts</a></li>
        <li><a href="#aboutPatrick">About</a></li>
        <li>Links to Patrick</li>
        <li>Pictures of dogs</li>
      </ul>
    )
  }
}
