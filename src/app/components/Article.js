// "use strict";
//
// import React from 'react';
//
// import styles from '../styles/App.css';
// import blogData from './allblogdata.json';
//
// export default class Article extends React.Component {
//   render () {
//     console.log(blogData);
//     return (
//       <div className="individualBlog">
//         <h2>{blogData[2].title}</h2>
//         <h3>{blogData[2].article[0]}</h3>
//         <h3>{blogData[2].tags}</h3>
//
//       </div>
//     )
//   }
// }


"use strict";

import React from 'react';

import styles from '../styles/App.css';
import blogData from './allblogdata.json';

export default class Article extends React.Component {

  render () {
    let paras = blogData[0].article;
    // console.log('paras: ', paras)

    let parasformatted = paras.map((para, i, a) => {
      return (para);
    })
console.log(parasformatted);

    return (
      <div className="individualBlog">
        <h2>{blogData[0].title}</h2>
        {/* <p>{ parasformatted }</p> */}
        {paras.map((para, i, a) => {
          return (<p>{para}</p>);
        })}
        <h3>{blogData[0].tags}</h3>
      </div>
    )
  }
}
