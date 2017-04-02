import React, { Component } from 'react';
import Relay from 'react-relay';
import Story from './Story';

const Feed = ({feed}) => {
  return (
    <div className="Feed">
      {feed.stories.edges.map(edge => <Story key={edge.cursor} story={edge.node} />)}
    </div>
  );
}

export default Relay.createContainer(Feed, {
  fragments: {
    feed: () => Relay.QL`
      fragment on Feed {
        stories {
          edges {
            cursor,
            node {
              ${Story.getFragment('story')}
            }
          }
        }
      }
    `,
  },
});
