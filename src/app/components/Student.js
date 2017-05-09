"use strict";

import React from 'react';
import Behaviors from './Behaviors';

import styles from '../styles/App.css';

export default class Student extends React.Component{
  render(){

    let studentFirst = this.props.studentFirst;
    let studentLast = this.props.studentLast;

    let behaviorOne = this.props.behaviorOne;
    let behaviorTwo= this.props.behaviorTwo;
    let behaviorThree = this.props.behaviorThree;
    let behaviorFour = this.props.behaviorFour;
    let behaviorFive = this.props.behaviorFive;
    let behaviorSix= this.props.behaviorSix;
    let behaviorSeven = this.props.behaviorSeven;
    let behaviorEight = this.props.behaviorEight;


    return (

      <div>

        <h1>{studentFirst} {studentLast}</h1>
      {/* List of Behaviors as a component. */}

        <img src={this.props.behaviorOne} alt="one"/>
        <img src={this.props.behaviorTwo} alt="Two"/>
        <img src={this.props.behaviorThree} alt="Three"/>
        <img src={this.props.behaviorFour} alt="Four"/>
        <img src={this.props.behaviorFive} alt="Five"/>
        <img src={this.props.behaviorSix} alt="Six"/>
        <img src={this.props.behaviorSeven} alt="Seven"/>
        <img src={this.props.behaviorEight} alt="Eight"/>
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
