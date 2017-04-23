"use strict";

import React from 'react';

import styles from '../styles/App.css';
import Article from './Article.js'

export default class Main extends React.Component {
  render () {
    return (
      <main>
        <h1>Blog Posts</h1>
        <Article />
      </main>
    )
  }
}
