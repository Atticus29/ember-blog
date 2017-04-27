import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveComment(params){
      var newEntry = this.store.createRecord('comment', params);
      var blog = params.blog;
      blog.get('comments').addObject(newEntry);
      newEntry.save().then(function(){
        return blog.save();
      });
    }
  }
});
