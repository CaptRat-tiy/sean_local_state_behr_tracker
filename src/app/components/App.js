"use strict";

import React from 'react';
import _ from 'underscore';
import * as firebase from 'firebase';

import styles from '../styles/App.css';

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
    this.changeIntoArray=this.changeIntoArray.bind(this)
    this.state = {
      courseData: {},
      students: [],

    }
  }

  componentWillMount(){
    fbRef.on("child_added", (snapshot)=>{
      const students = this.changeIntoArray(snapshot.val().studentArray)
      this.setState({
        students: students
      })
    })
  }

  changeIntoArray(object){
    const newArray = []
    _.map(object, function(c,i,a){
      newArray.push(c)
    })
    return newArray
  }

  render () {
    const students = this.state.students

    console.log(this.state.students);

    return (

      <div>
        {students.map((studentObject, index)=>{
          return <p key={studentObject.lastName}>{studentObject.firstName} {studentObject.lastName}</p>
        }

        )}

      </div>
    )
  }
}
