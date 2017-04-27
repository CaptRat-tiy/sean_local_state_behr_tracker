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
    //alphabetize the tags:
    tags.sort(function (a,b) {
      var nameA = a.toUpperCase(); // ignore upper and lowercase
      var nameB = b.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    return (
      <div>
          <ul>
            <div>
              <h6>tags/filters</h6>
                <ul>
                  {tags.map((c,i)=>{
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
