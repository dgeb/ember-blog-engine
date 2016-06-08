import Engine from 'ember-engines/engine';
import Resolver from 'ember-engines/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

const Eng = Engine.extend({
  modulePrefix: config.modulePrefix,
  Resolver,
  dependencies: {
    services: [
      'blog-data',
      'session'
    ]
  }
});

loadInitializers(Eng, config.modulePrefix);

export default Eng;
