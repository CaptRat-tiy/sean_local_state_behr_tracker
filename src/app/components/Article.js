
"use strict";

import React from 'react';

import styles from '../styles/App.css';
import blogData from './allblogdata.json';
import Date from './Date'

export default class Article extends React.Component {

  render () {
    return (
      <div>
        {
          blogData.map((c,i,a) => {
            return (
              <div key={i} className="individualBlog">
                <h6>{c.title}</h6>

                <Date blogDates={c.date} />
                {c.article.map((para, j) => {
                  if(para.includes(".jpg")||para.includes(".jpeg")||para.includes(".png")||para.includes(".gif")){
                    return <img src={para} />
                  }
                  return (
                    <p key={j}>
                      {para}
                    </p>
                   )}
                )}
                <img src={c.src} />
              </div>
            )}
          )}
      </div>
    )
  }
}
