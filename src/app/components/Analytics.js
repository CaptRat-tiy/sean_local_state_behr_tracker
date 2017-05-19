"use strict";

import React from 'react';
import _ from 'lodash';
import IndividualBehaviorTracking from './IndividualBehaviorTracking'

import styles from '../App.css';

export default class Analytics extends React.Component {
  render(){
    let students = this.props.students;
    let changeIntoArray=this.props.changeIntoArray;

    return (
      <div>
        {_.map(students, (student, i) => {
          const behaviors = student.behaviorHistory
          return (
            <div key={i} className="recurrence">
              <h2>{student.firstName} {student.lastName} </h2>
              <div className="recurrenceInfo">
                {_.map(behaviors, (instance, i) => {
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
