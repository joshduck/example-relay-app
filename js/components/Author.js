import React, { Component } from 'react';
import Relay from 'react-relay';
import './Author.css';

const Author = ({user}) =>{
  return (
    <div className="Author">
      <img src={user.image} alt={`${user.name} profile picture`} className="Author__image" />
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
