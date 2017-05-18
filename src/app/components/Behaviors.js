"use strict";

import React from 'react';
import _ from 'lodash';
import styles from '../App.css';

export default class Behaviors extends React.Component{
render() {

  let behaviors=this.props.behaviorList;
  let handleBehaviorClick=this.props.handleBehaviorClick.bind(this);
  let studentID=this.props.studentID;


return (
  <div>
    <div className = "studentBehaviorOptionsPurple">
    <p>Click all applicable behaviors: </p>

      {_.map(behaviors, (behavior) => {
      return (
        <button className="clickableBehavior" key={behavior.name} onClick={() => handleBehaviorClick(behavior.name, behavior.image, studentID)}>
          <p>{behavior.name}</p>
          <img src={behavior.image} alt={behavior.name} />
        </button>
          )
        }
      )}
    </div>
  </div>
)
  }
}
