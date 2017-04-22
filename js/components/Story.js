import React, { Component } from 'react';
import Relay from 'react-relay';
import Author from './Author';
import LikeButton from './LikeButton';
import './Story.css';

const Story = ({story}) => {

  return (
    <div className="Story">
      <LikeButton story={story} />
      <div className="Story__content">
        <h2 className="Story__headline">
          {story.title}
        </h2>
        <div className="Story__meta">
          <Author user={story.author} />
          <a href="#">{story.likeCount} votes</a>
          <a href="#">{story.commentCount} comments</a>
        </div>
      </div>
    </div>
  );
}

export default Relay.createContainer(Story, {
  fragments: {
    story: () => Relay.QL`
      fragment on Story {
        ${LikeButton.getFragment('story')},
        title,
        commentCount,
        likeCount,
        author {
          ${Author.getFragment('user')}
        }
      }
    `,
  },
});
