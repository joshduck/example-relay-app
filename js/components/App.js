import React from 'react';
import Relay from 'react-relay';
import News from './News';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Widget list</h1>
        <News />
        <ul>
          {this.props.viewer.name}
        </ul>
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
  },
});
