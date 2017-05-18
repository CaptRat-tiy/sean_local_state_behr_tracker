"use strict";

import React from 'react';

import styles from '../App.css';

export default class IndividualBehaviorTracking extends React.Component{
  render() {
    const instance = this.props.instance;

    return (
      <div className="busted">
        <div className="bustedBehavior">
          <img src={instance.behaviorImage} alt={instance.behavior}/>
          <h3>{instance.behavior}</h3>
        </div>
        <p>date of incident:  {instance.month}/{instance.date}/{instance.year}</p>
        <p>time of day: {instance.time}</p>
      </div>
    )
  }

}
