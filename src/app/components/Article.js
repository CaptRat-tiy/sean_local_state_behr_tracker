
"use strict";

import React from 'react';

import styles from '../styles/App.css';
import Date from './Date'

export default class Article extends React.Component {

  render () {
    const blogData = this.props.blogData;
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
                    return <img key={j} src={para} />
                  }
                  // This is the code that isolates the quotes as a different formatting
                  else if (typeof para === "object"){
                    return para.map((paraQuote, paraQuoteI)=>{
                      return <blockquote>{paraQuote}</blockquote>
                    })
                  }
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
