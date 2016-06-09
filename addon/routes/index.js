import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
  blogData: Ember.inject.service(),

  model() {
    console.log('store service is an instanceof DS.Store', this.get('store') instanceof DS.Store);

    return this.get('blogData').posts;
  }
});
