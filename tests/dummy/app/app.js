import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver,

  engines: {
    emberBlogEngine: {
      dependencies: {
        services: [
          'blog-data',
          {'session': 'active-session'}
        ]
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
