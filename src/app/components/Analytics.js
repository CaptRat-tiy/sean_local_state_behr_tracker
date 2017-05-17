"use strict";

import React from 'react';
import styles from '../App.css';
import _ from 'underscore';

export default class Analytics extends React.Component {

  changeIntoArray(object){
    const newArray = []
    _.map(object, function(c,i,a){
      newArray.push(c)
    })
    return newArray
  }


  render(){
    let students = this.props.students;

console.log("changeIntoArray: ",this.changeIntoArray);

    let studentsArray = this.changeIntoArray(students);

    console.log(typeof(studentsArray))

    return (
      <div>
      <p >{}</p>
        <p>Analytics HELLO</p>
      </div>
    )
  }
}
