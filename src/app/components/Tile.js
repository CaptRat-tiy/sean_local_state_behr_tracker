"use strict";

import React from 'react';
import styles from '../styles/App.css';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    console.log("Sunshine and homegrown vegetables!");
  }

  render () {
    const categoryArray = this.props.categoryArray

    return (
      <div>
          <ul>
            <div>
              <h6>{this.props.category}</h6>
                <ul>
                  {categoryArray.map((c,i)=>{
                    return <li key={i}><button onClick={this.handleClick}>{c}</button></li>
                    }
                  )}
                </ul>
            </div>
          </ul>
      </div>
    )
  }
}
