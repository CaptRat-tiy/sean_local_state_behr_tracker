"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Student extends React.Component{
  render(){
    return (

      <div>

        <h1>Carrie Name</h1>
        <h3 className="lastName">{this.props.lastName}</h3>
      </div>
    )
  }
}
