import React, { Component } from 'react';
import Author from './Author';
import './NewsItem.css';

class NewsItem extends Component {
  render() {
    return (
      <div className="NewsItem">
        <button className="NewsItem__vote">▲</button>
        <div className="NewsItem__content">
          <h2 className="NewsItem__headline">
            Headline
          </h2>
          <div className="NewsItem__meta">
            <Author />
            <a href="#">3 votes</a>
            <a href="#">3 comments</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
