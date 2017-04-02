import React from 'react';
import Relay from 'react-relay';
import Feed from './Feed';

const App = ({viewer, feed}) => {
  return (
    <div>
      <header className="App__header">
        <h1>React News</h1>
        <div>
          Welcome back, {viewer.name}.
        </div>
      </header>

      <Feed feed={feed} />
    </div>
  );
};

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name
      }
    `,

    feed: () => Relay.QL`
      fragment on Feed {
        ${Feed.getFragment('feed')}
      }
    `,
  },
});
