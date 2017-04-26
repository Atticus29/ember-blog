import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  author: DS.attr(),
  Body: DS.attr(),
  image: DS.attr(),
  dailyStory: DS.attr('boolean', {defaultValue: false}),
  life:  DS.attr('boolean', {defaultValue: false}),
  career:  DS.attr('boolean', {defaultValue: false}),
  entertainment:  DS.attr('boolean', {defaultValue: false}),
  hobbies:  DS.attr('boolean', {defaultValue: false})
});
