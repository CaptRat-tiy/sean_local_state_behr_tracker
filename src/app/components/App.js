"use strict";

import React from 'react';
import _ from 'underscore';
import * as firebase from 'firebase'

import Student from './Student'

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
      teacherInfo: {},
      behaviors: []
    }
  }

  componentWillMount(){
    fbRef.on("child_added", (snapshot)=>{
      const courseData = this.changeIntoArray(snapshot.val())
      const students = this.changeIntoArray(snapshot.val().studentArray)
      const teacherInfo = snapshot.val().teacherID
      const behaviors = this.changeIntoArray(snapshot.val().behaviors)
      this.setState({
        courseData: courseData,
        students: students,
        teacherInfo: teacherInfo,
        behaviors: behaviors
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
    const students=this.state.students
    const courseData=this.state.courseData
    const teacherInfo=this.state.teacherInfo
    const behaviors=this.state.behaviors

    return (

      <div>
        {students.map((student, index)=>{
          return <Student key={student.lastName} studentData={student} />
        })}
        <h1>{teacherInfo.firstName} {teacherInfo.lastName}'s Grade {teacherInfo.gradeLevel} Class </h1>

        {students.map((studentObject, index)=>{
          return <button key={studentObject.lastName}>{studentObject.firstName} {studentObject.lastName}</button>
          }
        )}

        {behaviors.map((behavior, index)=>{
          return (
            <div key={behavior.name}>
              <p>{behavior.name}</p>
              <img src={behavior.image} alt={behavior.name} />
           </div>
         )
        })}


      </div>
    )
  }
}
