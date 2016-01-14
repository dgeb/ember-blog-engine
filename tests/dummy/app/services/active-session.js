import Ember from 'ember';

export default Ember.Service.extend({
  user: null,

  init() {
    this._super();
    this.user = 'dgeb';
  }
});
