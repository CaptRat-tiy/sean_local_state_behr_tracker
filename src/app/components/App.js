"use strict"

import React from 'react'
import _ from 'lodash'
import Rebase from 're-base'

import Student from './Student'
import Behaviors from './Behaviors'
import Analytics from './Analytics'
import About from './About'
import Routing from './Routing'

import styles from '../App.css'

const base = Rebase.createClass({
  apiKey: "AIzaSyAjB5xxpo_eOVJ7LFoDJUN51TGXyhkq1IQ",
  authDomain: "behavioral-tracker-app.firebaseapp.com",
  databaseURL: "https://behavioral-tracker-app.firebaseio.com",
  projectId: "behavioral-tracker-app",
  storageBucket: "behavioral-tracker-app.appspot.com",
  messagingSenderId: "119916788968"
}, 'behavioral-tracker-app')


export default class App extends React.Component {
  constructor(){
    super()

// local state
    this.state = {
      courses: {
        courseID: {
          students: {
            0: {
              firstName: "Finnegan",
              image: "../image/student-icons/boy_with_cover.png",
              lastName: "Viszla",
              studentID: 0,
              behaviorHistory: {}
            },
            1: {
              firstName: "Kelly",
              image: "../image/student-icons/blond_girl.png",
              lastName: "Lilly",
              studentID: 1 ,
              behaviorHistory: {}
            },
          },

          teacherInfo: {
            firstName: "Kamie",
            lastName: "Logan",
            gradeLevel: 3
          },
        },
      },
      behaviors: {
        argumentative:{
          image: "../image/argumentative/argumentative_red.png",
          name: "Argumentative"
        },
        bullying:{
          image: "../image/bullying/bullying_red.png",
          name: "Bullying"
        },
        crying:{
          image: "../image/frequent crying/frequent_crying_red.png",
          name: "Crying"
        }
      },
    }

/*    //firebase-friendly
    this.state = {
      courseData: {},
      students: [],
      teacherInfo: {},
      behaviors: [],
    }*/
    this.generateGuid = this.generateGuid.bind(this)
    this.handleBehaviorClick = this.handleBehaviorClick.bind(this)
  }
  //
  // componentDidMount(){
  //   base.syncState('courseID', {
  //     context: this,
  //     state: 'courseID',
  //   })
  //   base.syncState('behaviors', {
  //     context: this,
  //     state: 'behaviors',
  //   })
  // }
  //
  // componentWillUnmount(){
  //   base.removeBinding(this.ref);
  // }

  generateGuid(){
    const min = 0
    const max = Number.MAX_SAFE_INTEGER
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  handleBehaviorClick(behavior, behaviorImage, studentID){

    const revisedStudents = {...this.state.courses.courseID.students}

console.log("revisedStudents is/are: ", revisedStudents);
    const now = new Date()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const year = now.getFullYear()
    const militaryTime = now.getHours() + ":" + now.getMinutes()

    const behaviorIdentifier = this.generateGuid()

    revisedStudents[studentID].behaviorHistory["courses/courseID/students/" + studentID + "/behaviorHistory/" + behaviorIdentifier] = {
       month: month,
       date: date,
       time: militaryTime,
       year: year,
       behavior: behavior,
       behaviorImage: behaviorImage
    }
    this.setState({students: revisedStudents})
  }

  render () {
    const students=this.state.courses.courseID.students
    const courseData=this.state.courses.courseID //is this right?
    const teacherInfo=this.state.courses.courseID.teacherInfo
    const behaviors=this.state.behaviors

    return (
      <div className="body">
        <div className="mainChalkboard">
          <div className="courseInfoLightGreen">
            <h1>{teacherInfo.firstName} {teacherInfo.lastName}'s Grade {teacherInfo.gradeLevel} Class</h1>
          </div>

          <div>
            {_.map(students, (student) => {
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
          <a href="https://github.com/CaptRat-tiy/Behavioral-Tracker">https://github.com/CaptRat-tiy/Behavioral-Tracker</a>
          </div>
        </div>
      </div>
    )
  }
}
