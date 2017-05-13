"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Behaviors extends React.Component{
render() {

  let behaviors=this.props.behaviorList

return (
  <div>


    <div className = "studentBehaviorOptionsPurpleBorder">
    <p>Click all applicable behaviors:</p>

      {behaviors.map((behavior, index)=>{
      return (
        <button className= "clickableBehavior" key={behavior.name} onClick={() => this.handleBehaviorClick(behavior.name)}>
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
