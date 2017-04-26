import Ember from 'ember';

export default Ember.Component.extend({
  updateEntryForm: false,
  actions: {
    updateEntryForm() {
      this.set('updateEntryForm', true);
    },
    update(blog) {
      if(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(this.get('image'))){
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
      }
    },
    cancel(){
      this.set('updateEntryForm', false);
    }
  }
});
