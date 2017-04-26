import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  Body: DS.attr(),
  image: DS.attr(),
  dailyStory: DS.attr(),
  tags: DS.attr()
});
