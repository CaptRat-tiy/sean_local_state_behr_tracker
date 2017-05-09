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

      <div className="studentProfile">
        <div>
          <h1>{studentFirst} {studentLast}</h1>

            {/* List of Behaviors as a component. */}
          <img src={this.props.behaviorOne} alt="argumentative"/>
          <img src={this.props.behaviorTwo} alt="bullying"/>
          <img src={this.props.behaviorThree} alt="excessive crying"/>
          <img src={this.props.behaviorFour} alt="aggresssion"/>
          <img src={this.props.behaviorFive} alt="hands to self"/>
          <img src={this.props.behaviorSix} alt="not facing front"/>
          <img src={this.props.behaviorSeven} alt="self-distracting"/>
          <img src={this.props.behaviorEight} alt="withdrawn"/>
        </div>
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
