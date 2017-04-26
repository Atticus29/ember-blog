import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('blog');
  },
  actions: {
    save(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        Body: this.get('body'),
        image: this.get('image'),
        life: this.get('life') ? this.get('life') : false,
        career: this.get('career') ? this.get('career') : false,
        entertainment: this.get('entertainment') ? this.get('entertainment') : false,
        hobbies: this.get('hobbies') ? this.get('hobbies') : false,
        dailyStory: this.get('dailyStory') ? this.get('dailyStory') : false
      };
      console.log(params);
      var newEntry = this.store.createRecord('blog', params);
      newEntry.save();
      this.transitionTo('index');
      // this.sendAction('save', params);
    },
    cancel(){
      this.transitionTo('index');
    }
  }
});
