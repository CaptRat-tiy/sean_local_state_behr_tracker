"use strict";

import React from 'react';
import styles from '../App.css';

export default class Analytics extends React.Component {
  render(){
    let students = this.props.students;
    let changeIntoArray=this.props.changeIntoArray;

    // console.log(students);

    return (
      <div>
         {students.map((student) => {
          // console.log("First Name: ", student.firstName,", " "student behaviorHistory: ", student.behaviorHistory);
          
            changeIntoArray(student.behaviorHistory).map((behaviorsOverTime, i) =>{
              return (
              <p>{"First Name: " + student.firstName + ", " + "behaviorsOverTime:" + behaviorsOverTime}</p>
              )
            }
          )}
        )}
      </div>
    )
  }
}
