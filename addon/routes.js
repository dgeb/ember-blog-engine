import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('new');

  this.route('post', { path: 'posts/:id' }, function() {
    this.route('comments');
  });
});
