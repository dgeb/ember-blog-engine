import Ember from 'ember';

export default Ember.Route.extend({
  blogData: Ember.inject.service(),

  model(params) {
    let posts = this.get('blogData').posts;

    for (let post of posts) {
      if (post.id === params.id) {
        return post;
      }
    }
  }
});
