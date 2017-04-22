import React, { Component } from 'react';
import Relay from 'react-relay';
import LikeStoryMutation from '../mutations/LikeStoryMutation';
import './LikeButton.css';

const LikeButton = ({story, relay}) => {
  return (
      <button
        className="LikeButton"
        onClick={() => relay.commitUpdate(new LikeStoryMutation({ story })) }
      >▲</button>
  );
}

export default Relay.createContainer(LikeButton, {
  fragments: {
    story: () => Relay.QL`
      fragment on Story {
        id,
        ${LikeStoryMutation.getFragment('story')}
      }
    `,
  },
});
