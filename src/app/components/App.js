"use strict";

import React from 'react';

import styles from '../styles/App.css';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyAjB5xxpo_eOVJ7LFoDJUN51TGXyhkq1IQ",
    authDomain: "behavioral-tracker-app.firebaseapp.com",
    databaseURL: "https://behavioral-tracker-app.firebaseio.com",
    projectId: "behavioral-tracker-app",
    storageBucket: "behavioral-tracker-app.appspot.com",
    messagingSenderId: "119916788968"
  };

firebase.initializeApp(config);

const fbRef= firebase.database().ref();

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.changeIntoArray=this.changeIntoArray.bind(this);
    this.state = {
      courseData: {},

    }
  }

  componentWillMount() {
    fbRef.on("child_added", (snapshot) => {
      this.setState({
        courseData: snapshot.val(),
        students: snapshot.val().studentArray,
        teacherInfo: snapshot.val().teacherID,
        behaviors: snapshot.val().behaviors,
        testing: this.changeIntoArray(snapshot.val().studentArray)
      })
    }).bind(this)
  }

changeIntoArray(object){
  console.log(object);
  const array = []
  object.map((c, i, a)=>{
    array.push(c)
  })
  return array
}
  render () {
    const teacherName = this.state.teacherInfo

    const testing=this.state.testing
    console.log(testing);
    return (

      <div>
        <h1>{testing}'s Course</h1>
      </div>
    )
  }
}
