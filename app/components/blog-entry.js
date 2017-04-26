import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    update(blog, params){
      this.sendAction('update', blog, params);
    },
    delete(blog){
      if(confirm("Are you sure you want to delete this entry?")){
        this.sendAction('destroyEntry', blog);
      }
    }
  }
});
