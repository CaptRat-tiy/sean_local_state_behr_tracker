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
              <p>{"student: ", student.firstName, "behaviorHistory:", behaviorHistory}</p>
              });
            })
        }
        <p>HELLO ANALYTICS</p>
      </div>
    )
  }
}
