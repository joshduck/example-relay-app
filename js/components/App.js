import React from 'react';
import Relay from 'react-relay';
import Feed from './Feed';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React News</h1>
        <ul>
          Welcome back, {this.props.viewer.name}.
        </ul>

        <Feed feed={this.props.feed} />
      </div>
    );
  }
}

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
