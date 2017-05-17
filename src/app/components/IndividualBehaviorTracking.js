"use strict";

import React from 'react';

import styles from '../App.css';

export default class IndividualBehaviorTracking extends React.Component{
  render() {
    const instance = this.props.instance;
    return (
      <div className="busted">
        <div className="bustedBehavior">
          <img src="../image/aggressive/aggressive speech black.png" alt=""/>
          <h3>{instance.behavior}</h3>
        </div>
        <p>{instance.month}/{instance.date}/{instance.year}</p>
        <p>{instance.time}</p>
      </div>
    )
  }

}
