"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Behaviors extends React.Component{
render() {

  let behaviors=this.props.behaviorList;
  let handleBehaviorClick=this.props.handleBehaviorClick

  console.log(handleBehaviorClick);

return (
  <div>
    <div className = "studentBehaviorOptionsPurple">
    <p>Click all applicable behaviors:</p>

      {behaviors.map((behavior, index)=>{
      return (
        <button className="clickableBehavior" key={behavior.name} onClick={() => handleBehaviorClick(behavior.name)}>
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
