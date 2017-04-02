/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import mock from './mock';

// Model types
class User {}
class Story {}
class Feed {}

// Mock data
var users = mock.user.map((data, i) => {
  var user = new User();
  Object.assign(user, data);
  user.id = String(i);
  return user;
})

var stories = mock.story.map((data, i) => {
  var story = new Story();
  Object.assign(story, data);
  story.id = String(i);
  return story;
})

module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => users.find(u => u.id === id),
  getViewer: () => users[0],
  getStory: (id) => stories.find(n => n.id === id),
  getStories: () => stories,
  User,
  Story,
  Feed,
};
