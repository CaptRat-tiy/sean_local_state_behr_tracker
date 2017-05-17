"use strict";

import React from 'react';
import styles from '../App.css';

export default class Analytics extends React.Component {
  render(){
    let students = this.props.students;
    let changeIntoArray=this.props.changeIntoArray;

    console.log(students);

    return (
      <div>
        {students.map((student, i) => {
          changeIntoArray(student.behaviorHistory).map((behaviorHistory, i, a) => {
            let firstName = student.firstName
            let recBehavior = {
              month: behaviorHistory.month,
              date: behaviorHistory.date,
              time: behaviorHistory.time,
              year: behaviorHistory.year,
              behavior:behaviorHistory.behavior
            }
console.log(firstName + "'s recurring behavior(s): ", recBehavior);
              });
            })
        }
        <p>{"Analytics Hello"}</p>
      </div>
    )
  }
}
