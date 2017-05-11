"use strict";

import React from 'react';
import Behaviors from './Behaviors';

import styles from '../styles/student.css';

export default class Student extends React.Component{
  render(){

    let students = this.props.students;
    let behaviors = this.props.behaviors;

    {console.log("outside Student render's return:", students)}

    return (
      <div className="studentProfileWindow">

      {console.log("inside Student render's return:", students)}

        {  students.map((student, index)=>{

          (
            <div key={index}>
              <h1>
                here
              </h1>
            </div>
          )
          }
        )}
      </div>
    )
  }
}
