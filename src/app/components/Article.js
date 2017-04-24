"use strict";

import React from 'react';

import styles from '../styles/App.css';
import blogData from './allblogdata.json';

export default class Article extends React.Component {
  render () {
    console.log(blogData);
    return (
      <div className="individualBlog">
        <h2>{blogData[2].title}</h2>
        <h3>{blogData[2].article}</h3>
        <h3>{blogData[2].tags}</h3>


      </div>
    )
  }
}
