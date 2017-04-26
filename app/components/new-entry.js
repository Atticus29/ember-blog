import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        Body: this.get('body'),
        image: this.get('image'),
        life: this.get('lifeChecked') ? this.get('lifeChecked') : false,
        career: this.get('careerChecked') ? this.get('careerChecked') : false,
        entertainment: this.get('entertainmentChecked') ? this.get('entertainmentChecked') : false,
        hobbies: this.get('hobbiesChecked') ? this.get('hobbiesChecked') : false,
        dailyStory: this.get('dailyStoryChecked') ? this.get('dailyStoryChecked') : false
      };
      console.log(params);
      this.sendAction('save', params);
    },
    cancel(){
      this.transitionTo('index');
    }
  }
});
