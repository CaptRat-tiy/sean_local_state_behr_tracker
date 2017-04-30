"use strict";

import React from 'react';
import styles from '../styles/App.css';
import Tile from './Tile.js'
import { alphabetize } from '../helper-function.js'

export default class Sidebar extends React.Component {

  render () {
    const blogData = this.props.blogData;

    const tags = [];
    const monthArray = [];
    const title = [];

    blogData.map((individArticle, i, a)=>{
      const tagsArray = individArticle.tags
      tagsArray.map((c, i, a) => {
        if(!tags.includes(c)) {
          tags.push(c)
        }
      })
    })

    blogData.map((individArticle, i)=>{
       title.push(individArticle.title)
    })

    blogData.map((individArticle, i)=>{
     const month = individArticle.date.month
      if(!monthArray.includes(month)) {
        monthArray.push(month)
      }
    })

    alphabetize(tags)
    alphabetize(title)

    return (
      <div className="sidebar">

        <Tile categoryArray = {tags} category = {"Tags"} />
        <Tile categoryArray = {title} category = {"Title"} />
        <Tile categoryArray = {monthArray} category = {"Month"}/>
      </div>
    )
  }
}
