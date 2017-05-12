"use strict";

import React from 'react';

import styles from '../styles/App.css';

export default class Behaviors extends React.Component{
render() {

  let behaviorList=this.props.behaviorList

return (
  <div className="studentBehaviorOptionsPurpleBorder">
  {behaviorList.map((behavior, index)=>{
    return (
      <div className='behaviorArray' key={behavior.name}>
        <p>{behavior.name}</p>
        <img src={behavior.image} alt={behavior.name} />
     </div>
    )
    })
  }
  </div>
)
  }
}
