export default function() {
  this.route('new');

  this.route('post', { path: 'posts/:id' }, function() {
    this.route('comments');
  });
}
