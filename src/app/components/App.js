"use strict";

import React from 'react';

import styles from '../styles/App.css';
import observedBehaviors from './observedBehaviors.json';
console.log(observedBehaviors);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      observedBehaviors: observedBehaviors,
    }
  }

  render () {
    // const observedBehaviors=this.props.observedBehaviors;
    return (
      <div>
        {
        observedBehaviors.map((c,i,a) =>{
          return (
            <div>
              <h6>{observedBehaviors.ATTENDANCE.tardy}</h6>
            </div>
          )
        })
        }
      </div>
    )
  }
}
