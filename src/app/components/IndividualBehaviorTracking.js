"use strict";

import React from 'react';

import styles from '../App.css';

export default class IndividualBehaviorTracking extends React.Component{
  render() {
    const instance = this.props.instance;
    console.log(instance);
    return (
      <div className="busted">
        <div className="bustedBehavior">
          <img src={instance.behaviorImage} alt={instance.behavior}/>
          <h3>{instance.behavior}</h3>
        </div>
        <p>{instance.month}/{instance.date}/{instance.year}</p>
        <p>{instance.time}</p>
      </div>
    )
  }

}
