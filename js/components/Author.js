import React, { Component } from 'react';
import Relay from 'react-relay';
import './Author.css';

class Author extends Component {
  render() {
    return (
      <div className="Author">
        {this.props.user.name}
      </div>
    );
  }
}


export default Relay.createContainer(Author, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        name,
        image
      }
    `,
  },
});
