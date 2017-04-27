import Ember from 'ember';

export default Ember.Component.extend({
  showNewComment: false,
  actions: {
    saveComment(){
      var params= {
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body')
      };
      this.set('showNewComment', false);
      this.sendAction('saveComment', params);
    },
    cancel(){
      this.set('showNewComment', false);
    },
    showNewComment(){
      this.set('showNewComment', true);
    }
  }
});
