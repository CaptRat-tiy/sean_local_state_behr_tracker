"use strict";

import React from 'react';
import styles from '../styles/App.css';


export default class Tile extends React.Component {

  render () {
    const blogData = this.props.blogData;
    const tags = [];
    blogData.map((individArticle, i)=>{
      const tagsArray = individArticle.tags

      tagsArray.map((c, i, a) => {
        if(!tags.includes(c)) {
          tags.push(c)
        }
      })
    })
    return (
      <div>

          <ul>
            <div>
            <h5>TILES (titles, filters, dates)</h5>
              <h6>{tags}</h6>
            </div>
          </ul>
      </div>
    )
  }
}
