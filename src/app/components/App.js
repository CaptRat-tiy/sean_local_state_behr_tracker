"use strict";

import React from 'react';
import _ from 'underscore';
import * as firebase from 'firebase'

import Student from './Student'
import About from './About'
import Footer from './Footer'
import Routing from './Routing'


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
    this.handleBehaviorClick=this.handleBehaviorClick.bind(this)
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

  handleBehaviorClick(behavior) {
    console.log(behavior);
  }

  render () {
    const students=this.state.students
    const courseData=this.state.courseData
    const teacherInfo=this.state.teacherInfo
    const behaviors=this.state.behaviors

    return (
      <div className="body">
        <div className="mainYellow">

          <div className="courseInfoLightGreen">
            <h1>{teacherInfo.firstName} {teacherInfo.lastName}'s Grade {teacherInfo.gradeLevel} Class</h1>
          </div>

          <div className = "studentBehaviorOptionsPurpleBorder">
            {this.state.behaviors.map((behavior, index)=>{
            return (
              <div className= "singleBehavior" key={behavior.name} onClick={() => this.handleBehaviorClick(behavior.name)}>
                <p>{behavior.name}</p>
                <img src={behavior.image} alt={behavior.name} />
              </div>
                )
              }
            )}
          </div>

          <div>
            <div className="studentSelectorButtons">
            {students.map((studentObject, index)=>{
              return <button key={studentObject.lastName}>{studentObject.firstName} {studentObject.lastName}</button>
              }
            )}
            </div>
          </div>


          <div className="footer">
            This qualifies as a footer
          </div>

          <div className="pushThisToStudentComponent">
            {students.map((student, index)=>{
              console.log(student, "hello world")
            return <Student
                key={index}
                student={student}
                behaviors={behaviors}
              />
              }
            )}
          </div>
        </div>
      </div>
    )
  }
}
