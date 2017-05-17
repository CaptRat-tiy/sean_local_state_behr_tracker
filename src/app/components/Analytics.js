"use strict";

import React from 'react';
import App from './App';
import styles from '../App.css';

export default class Analytics extends React.Component {
  render(){
    let students = this.props.students;
    let changeIntoArray=this.props.changeIntoArray;

    // console.log(students);

    return (
      <div>
        {students.map((student, i) => {
          changeIntoArray(student.behaviorHistory).map((behaviorHistory, i, a) => {
              let firstName = student.firstName
              behaviorHistory = behaviorHistory
            return (
                <h1>{ "anything?" }</h1>
                )
              });
            })
        }
        <p>HELLO ANALYTICS</p>
      </div>
    )
  }
}

// console.log("student: ", firstName, "behaviorHistory:", behaviorHistory)
