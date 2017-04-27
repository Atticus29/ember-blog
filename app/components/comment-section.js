import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment){
      if(confirm("Are you sure that you want to delete this comment?")){
        this.sendAction('destroyComment', comment);
      }
    },
    updateComment(comment, params){
      this.sendAction('updateComment', comment, params);
    }
  }
});
