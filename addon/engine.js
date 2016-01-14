import Engine from 'ember-engines/engine';
import Resolver from 'ember-engines/resolver';

export default Engine.extend({
  modulePrefix: 'ember-blog-engine',

  Resolver,

  dependencies: {
    services: [
      'blog-data',
      'session'
    ]
  }
});
