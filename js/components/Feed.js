import React, { Component } from 'react';
import Relay from 'react-relay';
import Story from './Story';
import './Feed.css';

const Feed = ({feed, relay}) => {
  console.log(feed);
  return (
    <div className="Feed">
      {feed.stories.edges.map(edge => <Story key={edge.cursor} story={edge.node} />)}
      <button
        className="Feed__next"
        onClick={() => relay.setVariables({count: relay.variables.count + 3})}
        disabled={!feed.stories.pageInfo.hasNextPage}
      >Load More</button>
    </div>
  );
}

export default Relay.createContainer(Feed, {
  initialVariables: {
    count: 3,
  },

  fragments: {
    feed: () => Relay.QL`
      fragment on Feed {
        stories(first: $count) {
          pageInfo {
            hasNextPage
          }
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
