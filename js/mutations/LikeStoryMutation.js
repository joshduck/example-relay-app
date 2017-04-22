import Relay from 'react-relay';

export default class LikeStoryMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { likeStory }`;
  }

  getVariables() {
    return {id: this.props.story.id};
  }

  getFatQuery() {
    return Relay.QL`
      fragment on LikeStoryPayload {
        story {
          likeCount
        },
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        story: this.props.story.id,
      },
    }];
  }

  getOptimisticResponse() {
    return {
      story: {
        id: this.props.story.id,
        likeCount: this.props.story.likeCount + 1,
      },
    };
  }

  static fragments = {
    story: () => Relay.QL`
      fragment on Story {
        id,
        likeCount
      }
    `,
  };
}
