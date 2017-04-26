import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('blog-detail', {path: '/blog-detail/:blog_id'});
  this.route('new-entry');
});

export default Router;
