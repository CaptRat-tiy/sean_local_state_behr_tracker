"use strict";

import React from 'react';
import styles from '../styles/App.css';
import Tile from './Tile.js'


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

    function alphabetize(array) {
      array.sort(function (a,b) {
        var nameA = a.toUpperCase(); // ignore upper and lowercase
        var nameB = b.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      });
    }

    alphabetize(tags)
    alphabetize(title)

    return (
      <div className="sidebar">
        <p>TILES (titles, filters, dates)</p>

        <Tile categoryArray = {tags} />
        <Tile categoryArray = {title} />
        <Tile categoryArray = {monthArray} />
      </div>
    )
  }
}
