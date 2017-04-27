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
    },
    destroyComment(comment){
      comment.destroyRecord();
    },
    updateComment(comment, params){
      // console.log(comment);
      Object.keys(params).forEach(key=>{
        if(params[key]!==undefined){
          comment.set(key, params[key]);
        }
      });
      comment.save();
    }
  }
});
