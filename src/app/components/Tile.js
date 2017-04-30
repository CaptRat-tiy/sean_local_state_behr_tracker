"use strict";

import React from 'react';
import styles from '../styles/App.css';

export default class Tile extends React.Component {

  render () {
    const categoryArray = this.props.categoryArray

    return (
      <div>
          <ul>
            <div>
              <h6>tags/filters</h6>
                <ul>
                  {categoryArray.map((c,i)=>{
                    return <li key={i}>{c}</li>
                    }
                  )}
                </ul>
            </div>
          </ul>
      </div>
    )
  }
}
