"use strict";

import React from 'react';
import _ from 'underscore';
import * as firebase from 'firebase'

import Student from './Student'
import Behaviors from './Behaviors'
import Analytics from './Analytics'
import About from './About'
import Routing from './Routing'

import styles from '../App.css';

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
  constructor(){
    super();
    this.changeIntoArray=this.changeIntoArray.bind(this)
    this.handleBehaviorClick=this.handleBehaviorClick.bind(this)
    this.handleStudentClick=this.handleStudentClick.bind(this)
    this.changeIntoArray=this.changeIntoArray.bind(this)

    this.state = {
      courseData: {},
      students: [],
      teacherInfo: {},
      behaviors: [],
    }
  }

  componentWillMount(){
    fbRef.on("child_added", (snapshot)=>{
      const courseData = this.changeIntoArray(snapshot.val())
      const teacherInfo = snapshot.val().teacherID
      const students = this.changeIntoArray(snapshot.val().studentArray)
      const behaviors = this.changeIntoArray(snapshot.val().behaviors)
      const analytics = this.changeIntoArray(snapshot.val().analytics)

      this.setState({
        courseData: courseData,
        students: students,
        teacherInfo: teacherInfo,
        behaviors: behaviors,
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

  handleStudentClick(student){
    
  }

  handleBehaviorClick(behavior, behaviorImage, studentID){
      let d=new Date()
      const month = d.getMonth() + 1
      const date = d.getDate()
      const year = d.getFullYear()
      const militaryTime=d.getHours() +":" + d.getMinutes()

      let timestamp = Date.now()

     const behaviorIdentifier=fbRef.push().key
     let behaviorUpdate={}
     behaviorUpdate["courseID/studentArray/" +studentID+"/behaviorHistory/" +behaviorIdentifier] = {
       month: month,
       date: date,
       time: militaryTime,
       year: year,
       behavior:behavior,
       behaviorImage: behaviorImage
     }
     fbRef.update(behaviorUpdate)
  }

  render () {
    const students=this.state.students
    const courseData=this.state.courseData
    const teacherInfo=this.state.teacherInfo
    const behaviors=this.state.behaviors

    return (
      <div className="body">
        <div className="mainChalkboard">
          <div className="courseInfoLightGreen">
            <h1>{teacherInfo.firstName} {teacherInfo.lastName}'s Grade {teacherInfo.gradeLevel} Class</h1>
          </div>

          <div>
            {students.map((student)=>{
            return <Student
                key={student.studentID}
                student={student}
                behaviors={behaviors}
                handleBehaviorClick={this.handleBehaviorClick}/>
              }
            )}
          </div>

          {/*<div className="studentSelectorButtonsPinkBackground">
            <p>Please select the student you wish to monitor:</p>

            {students.map((studentObject)=>{
              return <button key={studentObject.lastName} onClick={() => this.handleStudentClick(studentObject.firstName)} >{studentObject.firstName} {studentObject.lastName}</button>
              }
            )}
          </div>*/}

          <div className="analytics">
            <Analytics
              students={students}
              changeIntoArray={this.changeIntoArray}

              />
          </div>

          <div className="footer">
            This qualifies as a footer
          </div>
        </div>
      </div>
    )
  }
}
