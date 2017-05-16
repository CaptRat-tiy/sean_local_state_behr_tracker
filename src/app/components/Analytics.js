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
        {students.map((student) => {
          console.log("student: ", student.behaviorHistory);

          changeIntoArray(student.behaviorHistory).map((c, i, a) =>{
              console.log("c:", c);

            })
          return (
            <p></p>
              )
        }
      )}

      </div>
    )
  }
}
