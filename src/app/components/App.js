"use strict";

import React from 'react';

import styles from '../styles/App.css';
import observedBehaviors from './observedBehaviors.json';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      observedBehaviors: observedBehaviors,
    }
  }

  render () {
    // console.log(observedBehaviors);
    // const observedBehaviors=this.props.observedBehaviors;
    return (
      <div>
        {
        observedBehaviors.map((c,i,a) =>{
          return (
            <div key={i}>
              <p>{"Hellp World!"}</p>
              <p>{console.log(c.TEACHER1.firstname)}</p>
            </div>
          )
        })
        }
      </div>
    )
  }
}
