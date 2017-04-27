import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      blogs: this.store.findAll('blog'),
      comments: this.store.findAll('comment')
    });
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
    },
    save(params){
      var newEntry = this.store.createRecord('blog', params);
      newEntry.save();
      this.transitionTo('index');
    }
  }
});
