"use strict";

import React from 'react';
import IndividualBehaviorTracking from './IndividualBehaviorTracking'

import styles from '../App.css';

export default class Analytics extends React.Component {
  render(){
    let students = this.props.students;
    let changeIntoArray=this.props.changeIntoArray;

    return (
      <div>
        {students.map((student, i) => {
          const behaviorArray = changeIntoArray(student.behaviorHistory)
          return (
            <div key={i} className="recurrence">
              <h2>{student.firstName} {student.lastName} </h2>
              <div className="recurrenceInfo">
                {behaviorArray.map((instance, i) => {
                  return <IndividualBehaviorTracking key={i}
                    instance={instance} />
                })}
              </div>
            </div>
          )
            })
          }
      </div>
    )
  }
}

// <div>
//   {students.map((student, i) => {
//     changeIntoArray(student.behaviorHistory).map((behaviorHistory, i, a) => {
//       let firstName = student.firstName
//       let recBehavior = {
//         month: behaviorHistory.month,
//         date: behaviorHistory.date,
//         time: behaviorHistory.time,
//         year: behaviorHistory.year,
//         behavior:behaviorHistory.behavior
//       }
// console.log(firstName + "'s recurring behavior(s): ", recBehavior);
//         });
//       })
//   }
//   <p>Analytics HELLO</p>
// </div>
