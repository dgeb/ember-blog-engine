/*eslint no-console: off */

export function initialize(appInstance) {
  console.log('hello-instance initializer');

  let config = appInstance.resolveRegistration('config:environment');
  console.log('modulePrefix', config.modulePrefix);
}

export default {
  name: 'hello-instance',
  initialize: initialize
};
