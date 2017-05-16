/*eslint no-console: off */

import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let owner = Ember.getOwner(this);
    console.log('dummy - config:environment', owner.resolveRegistration('config:environment'));
  }
});
