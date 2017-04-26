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
    console.log({tags}); return (
      <div>
        <h5>TAG TILE</h5>
          <ul>
            {blogData.map((individArticle, i)=>{
              const tagsArray = individArticle.tags

              return tagsArray.map((c, i, a) => {
                if(!tags.includes(c)) {
                  tags.push(c)
                }
                return tags.map((tags)=>{
                  return <li>{tags}</li>
                })
              })
            }) }

          </ul>
        <p>Hello, World?</p>
      </div>
    )
  }
}
