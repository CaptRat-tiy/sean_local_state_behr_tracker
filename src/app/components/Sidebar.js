"use strict";

import React from 'react';
import styles from '../styles/App.css';
import Tile from './Tile.js'


export default class Sidebar extends React.Component {

  render () {
    const blogData = this.props.blogData;
    const tags = [];
    const dates = [];
    const titles = [];
// make tags, dates and title arrays
//     function makeSidebarArrays (array, category) {
//       blogData.map((individArticle, i, a)=>{
//       // const individArray = individArticle.tags
//       const individArray = category;
//
//       console.log(individArray);
//       individArray.map((c, i, a) => {
//         if(!array.includes(c)) {
//           array.push(c)
//         }
//       })
// })}
// const test = makeSidebarArrays(tags, blogData[i].tags);
//
// console.log(test);

    blogData.map((individArticle, i, a)=>{
      const tagsArray = individArticle.tags
      tagsArray.map((c, i, a) => {
        if(!tags.includes(c)) {
          tags.push(c)
        }
      })
    })
    //alphabetize the categoryArrays:
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
      <div className="sidebar">
        <p>TILES (titles, filters, dates)</p>
      {/*this Tile is for tags,... but there will be more */}
        <Tile categoryArray = {tags} />

      </div>
    )
  }
}
