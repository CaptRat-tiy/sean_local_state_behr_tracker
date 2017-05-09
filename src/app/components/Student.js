"use strict";

import React from 'react';
import Behaviors from './Behaviors';

import styles from '../styles/App.css';

export default class Student extends React.Component{
  render(){

    let studentFirst = this.props.studentFirst;
    let studentLast = this.props.studentLast;
    let behaviorList = this.props.behaviorList;

    return (

      <div>

        <h1>{studentFirst} {studentLast}</h1>
      {/* List of Behaviors as a component. */}

      </div>
    )
  }
}

// <Behaviors
//   behaviorList = {this.props.behaviorList}
//   />

// {behaviorList.map((behavior, index)=>{
//   return (
//     <div key={behavior.name}>
//       <p>{behavior.name}</p>
//       <img src={behavior.image} alt={behavior.name} />
//    </div>
//  )
// })}
