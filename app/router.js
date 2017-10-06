import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('friends', function() {
    this.route('create');
    this.route('detail', { path: 'detail/:friend_id' });
    this.route('edit', { path: 'edit/:friend_id' });
    this.route('list');
  });
});

export default Router;
