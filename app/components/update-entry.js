import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm() {
      this.set('updateEntryForm', true);
    },
    update(blog) {
      // debugger;
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        life: this.get('life'),
        career: this.get('career'),
        entertainment: this.get('entertainment'),
        hobbies: this.get('hobbies')
      };
      this.set('updateEntryForm', false);
      this.sendAction('update', blog, params);
    },
    cancel(){
      this.set('updateEntryForm', false);
    }
  }
});
