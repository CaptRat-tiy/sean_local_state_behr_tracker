"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Date extends React.Component {
  render () {
    let dates = this.props.blogDates;
    return (
      <div>
        <span className="calendar">{dates.month} {dates.day}, {dates.year}</span>
      </div>
    )
  }
}
