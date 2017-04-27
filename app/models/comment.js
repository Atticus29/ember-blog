import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  date:  DS.attr(),
  blog: DS.belongsTo('blog', {async: true})
});
