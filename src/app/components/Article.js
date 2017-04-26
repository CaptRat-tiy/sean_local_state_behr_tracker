
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
                  return (
                    <p key={j}>
                      {para}
                    </p>
                   )}
                )}
              </div>
            )}
          )}
      </div>
    )
  }
}
