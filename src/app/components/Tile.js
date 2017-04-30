"use strict";

import React from 'react';
import styles from '../styles/App.css';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    // possibly(!?) unneeded #10
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(event){
    this.props.setFilterState(event.target.id, event.target.name);
  }

  render () {
    const categoryArray = this.props.categoryArray
    const category = this.props.category
    return (
      <div>
          <ul>
            <div>
              <h6>{category}</h6>
                <ul>
                  {categoryArray.map((c,i)=>{
                    return <li key={i}><button id={c} name={category} onClick={this.handleClick}>{c}</button></li>
                    }
                  )}
                </ul>
            </div>
          </ul>
      </div>
    )
  }
}
