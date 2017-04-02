import React, { Component } from 'react';
import Relay from 'react-relay';
import Author from './Author';
import './Story.css';

class Story extends Component {
  render() {
    return (
      <div className="Story">
        <button className="Story__vote">▲</button>
        <div className="Story__content">
          <h2 className="Story__headline">
            {this.props.story.title}
          </h2>
          <div className="Story__meta">
            <Author user={this.props.story.author} />
            <a href="#">{this.props.story.likeCount} votes</a>
            <a href="#">{this.props.story.commentCount} comments</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Relay.createContainer(Story, {
  fragments: {
    story: () => Relay.QL`
      fragment on Story {
        id,
        title,
        href,
        commentCount,
        likeCount,
        author {
          ${Author.getFragment('user')}
        }
      }
    `,
  },
});
