"use strict";

import React from 'react';

import styles from '../styles/App.css';
import blogData from './allblogdata.json';

export default class Article extends React.Component {
  render () {
    console.log(blogData);
    return (
      <div className="individualBlog">
        <h2>{blogData[1].title}</h2>
        <h3>{blogData[1].article}</h3>


      </div>
    )
  }
}
