"use strict";

import React from 'react';
import styles from '../styles/App.css';


export default class Tile extends React.Component {

  render () {
    const blogData = this.props.blogData;
    const tags = [];
    blogData.map((individArticle, i)=>{
      const tagsArray = individArticle.tags
// filter to only show possible tags, not EVERY tag:
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
              <h6>tags/filters</h6>
              {tags.map((c,i)=>{
                return <h6>{c}</h6>
                }
              )}

            </div>
          </ul>
      </div>
    )
  }
}
