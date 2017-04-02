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
class NewsItem {}

// Mock data
var users = mock.user.map((data, i) => {
  var user = new User();
  Object.assign(user, data);
  user.id = String(i);
  return user;
})

var newsItems = mock.newsItem.map((data, i) => {
  var newsItem = new NewsItem();
  Object.assign(newsItem, data);
  newsItem.id = String(i);
  return newsItem;
})

module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => users.find(u => u.id === id),
  getViewer: () => users.find('0'),
  getNewsItem: (id) => newsItems.find(n => n.id === id),
  getNewsItems: () => newsItems,
  User,
  NewsItem,
};
