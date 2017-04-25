"use strict";

import React from 'react';

import styles from '../styles/App.css';
import Article from './Article.js';

export default class Main extends React.Component {

  render () {
    return (

        <main>
          <h2>Blog Posts</h2>
          <Article />
        </main>

    )
  }
}
