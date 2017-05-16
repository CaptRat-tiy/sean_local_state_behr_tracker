"use strict";

import React from 'react';
import styles from '../App.css';

export default class Analytics extends React.Component {
  render(){
    let students = this.props.students;
    let changeIntoArray=this.changeIntoArray;

    console.log(students);

    return (
      <div>
        {students.map((student) => {
          console.log("student: ", student.behaviorHistory);
          const behaviors = student.behaviorHistory
            console.log("behaviors: ", behaviors);



            behaviors._map((c, i, a) =>{
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
