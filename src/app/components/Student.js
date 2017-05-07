"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Student extends React.Component{
  render(){
    return (
      <div>
      <h1>Student Name</h1>
         <h3 className="lastName">{this.props.student}</h3>
      </div>
    )
  }
}
