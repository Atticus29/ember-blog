import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm() {
      this.set('updateEntryForm', true);
    },
    update(blog) {
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
        this.set('updateEntryForm', false);
        this.sendAction('update', blog, params);
    },
    cancel(){
      this.set('updateEntryForm', false);
    }
  }
});
