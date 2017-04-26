import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(blog){
      this.sendAction('update', blog);
    },
    delete(blog){
      if(confirm("Are you sure you want to delete this entry?")){
        this.sendAction('destroyEntry', blog);
      }
    }
  }
});
