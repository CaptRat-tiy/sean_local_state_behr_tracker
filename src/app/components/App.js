"use strict";

import React from 'react';

import styles from '../styles/App.css';
import Main from './Main';
import Header from './Header';
import blogData from './allblogdata.json';
import Sidebar from './Sidebar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setFilterState=this.setFilterState.bind(this);
    this.setBlogData = this.setBlogData.bind(this)

    this.state = {
      blogData: blogData,
    }
  }

//get specific button info, brought up from Components, to re-set state
  setFilterState(selector, category) {
    this.setState({
      blogData: this.setBlogData(selector, category),
    })
  }

    setBlogData (selector, category) {
      const selectedBlogData = []
      if(category==="Tags") {
        blogData.map((article) => {
          article.tags.map((c, i) => {
            if(c === selector) {
              selectedBlogData.push(article)
          }
          })
        })
      } else if (category==="Title") {
        blogData.map((article) => {
          if (article.title === selector) {
            selectedBlogData.push(article)
          }
        })
      } else if (category==="Month") {
        blogData.map((article) => {
          if (article.date.month === selector) {
            selectedBlogData.push(article)
          }
        })
      }
      return selectedBlogData
    }


  render () {
    return (
      <div id="layout">
        <Header />
        <div className="main">
          <Sidebar
            blogData = {blogData}
            setFilterState={this.setFilterState}
          />
          <Main
            blogData = {this.state.blogData}
          />
        </div>
        <footer>THIS IS THE FOOTER.  Don't judge!</footer>
      </div>
    )
  }
}
