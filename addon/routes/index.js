import Ember from 'ember';

export default Ember.Route.extend({
  blogData: Ember.inject.service(),

  model() {
    return this.get('blogData').posts;
  }
});
