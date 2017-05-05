"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Student extends React.Component{
  render(){
    return (
      <div>
         <h1>Not Student</h1>
         <h3 className="profile" >{this.props.profile}</h3>
      </div>
    )
  }
}
