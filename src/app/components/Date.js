"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Date extends React.Component {
  render () {
    let dates = this.props.blogDates;
    return (
      <div>
        <p>{dates.month} {dates.day}, {dates.year}</p>
      </div>
    )
  }
}

//
// "date": {
//   "month": "December",
//   "day": "28",
//   "year": 2016
// },
