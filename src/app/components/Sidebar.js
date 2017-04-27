"use strict";

import React from 'react';
import styles from '../styles/App.css';
import Tile from './Tile.js'


export default class Sidebar extends React.Component {

  render () {
    // const blogData = this.props.blogData;
    return (
      <div className="sidebar">
        <p>TILES (titles, filters, dates)</p>
        <Tile blogData = {this.props.blogData} />
        <Tile blogData = {this.props.blogData} />
      </div>
    )
  }
}
