"use strict";

import React from 'react';
import _ from 'underscore';
import * as firebase from 'firebase'

import Student from './Student'
import Behaviors from './Behaviors'
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
        <h1>{teacherInfo.firstName} {teacherInfo.lastName}'s Grade {teacherInfo.gradeLevel} Class </h1>

          {/* filter/buttons of Students */}
        {students.map((studentObject, index)=>{
          return <button key={studentObject.lastName}>{studentObject.firstName} {studentObject.lastName}</button>
          }
        )}

          {/* filter/buttons of Behaviors */}
        {this.state.behaviors.map((behavior, index)=>{
          return (
            <div className='behaviorArray' key={behavior.name}>
              <p>{behavior.name}</p>
              <img src={behavior.image} alt={behavior.name} />
           </div>
         )
        })}

        {students.map((student, index)=>{

          console.log(this.state.behaviors);
          return
           <Student
          key={index}
          studentFirst={student.firstName}
          studentLast = {student.lastName}
          behaviorList={this.state.behaviors} />

          // behaviorOne = {this.state.behaviors[0].image}
          // behaviorTwo = {this.state.behaviors[1].image}
          // behaviorThree = {this.state.behaviors[2].image}
          // behaviorFour = {this.state.behaviors[3].image}
          // behaviorFive = {this.state.behaviors[4].image}
          // behaviorSix = {this.state.behaviors[5].image}
          // behaviorSeven = {this.state.behaviors[6].image}
          // behaviorEight = {this.state.behaviors[7].image}

          // behaviorOne = {this.state.behaviors[0].image}
          // behaviorTwo = {this.state.behaviors[1].image}
          // behaviorThree = {this.state.behaviors[2].image}
          // behaviorFour = {this.state.behaviors[3].image}
          // behaviorFive = {this.state.behaviors[4].image}
          // behaviorSix = {this.state.behaviors[5].image}
          // behaviorSeven = {this.state.behaviors[6].image}
          // behaviorEight = {this.state.behaviors[7].image}

          return (
            <div>
              <Student
                key={index}
                studentFirst={student.firstName}
                studentLast = {student.lastName} />
              <Behavior
                key={index}
                behaviorList={behaviors} />
            </div>
            )
          }
        )}
      </div>
    )
  }
}
