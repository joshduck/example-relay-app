import React, { Component } from 'react';
import Relay from 'react-relay';
import './Author.css';

const Author = ({user}) =>{
  return (
    <div className="Author">
      {user.name}
    </div>
  );
};

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
