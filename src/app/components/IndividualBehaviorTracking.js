"use strict";

import React from 'react';

import styles from '../App.css';

export default class IndividualBehaviorTracking extends React.Component{
  render() {
    const instance = this.props.instance;

// (does this work for 8:05am, instead of 8:5am?)
    let minutes = instance.time.minutes
    if (minutes = 0){
      minutes = "00"
    }
    else if (minutes < 10){
      minutes = "0" + minutes
    }

//In Time of Day, minutes under 10 do not display 2 numbers.  So 8:05pm  is 20:0 !?
    return (
      <div className="busted">
        <div className="bustedBehavior">
          <img src={instance.behaviorImage} alt={instance.behavior}/>
          <h3>{instance.behavior}</h3>
        </div>
        <p>date of incident: {instance.month}/{instance.date}/{instance.year}</p>
        <p>time of day: {instance.time}</p>
      </div>
    )
  }
}
