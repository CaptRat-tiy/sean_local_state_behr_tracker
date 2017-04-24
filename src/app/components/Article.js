"use strict";

import React from 'react';

import styles from '../styles/App.css';
import blogData from './allblogdata.json';

export default class Article extends React.Component {

  render () {
    return (
      <div>
        {
          blogData.map((c,i,a) => {
            return (
              <div className="individualBlog">
              <h4 key={i}>{c.title}</h4>
              </div>
            )
          })
        }
      </div>
    )
  }
}


// <div className="individualBlog">
//   <h2>{blogData[1].title}</h2>
//   {paras.map((para, i, a) => {
//     return (<p key={i}>{para}</p>);
//   })}
//   <h3>{blogData[0].tags}</h3>
// </div>
