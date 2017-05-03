"use strict";

import React from 'react';

import styles from '../styles/App.css';
import observedBehaviors from './observedBehaviors.json';

export default class App extends React.Component {

  render () {
    const observedBehaviors = this.props.observedBehaviors;

    return (
      <div>
        {
        observedBehaviors.map((c,i,a) =>{
          return (
            <div>
              <h6>{observedBehaviors.TEACHER}</h6>
            </div>
          )
        })
      }

      </div>


    )
  }
}
