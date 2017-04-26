import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('blog');
  },
  actions: {
    update(entry, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          entry.set(key, params[key]);
        }
      });
      entry.save();
      this.transitionTo('index');
    },
    destroyEntry(entry){
      entry.destroyRecord();
      this.transitionTo('index');
    }
  }
});
