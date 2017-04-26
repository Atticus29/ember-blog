import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params){
      console.log(params);
      var newEntry = this.store.createRecord('blog', params);
      newEntry.save();
      this.transitionTo('index');
    },
  }
});
