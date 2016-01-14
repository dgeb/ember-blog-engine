import Ember from 'ember';

export default Ember.Service.extend({
  posts: null,

  init() {
    this._super();

    this.posts = [
      {
        id: '1',
        title: 'Welcome to My Blog',
        author: 'dgeb',
        body: `
          <p>I hear blogging is the latest thing so I'm going to give this a go.</p>
          <p>Please leave some comments below.</p>
        `,
        comments: [
          {
            id: '101',
            author: 'rwjblue',
            comment: `Good luck!`
          }
        ]
      },
      {
        id: '2',
        title: 'Closing this Thing Down',
        author: 'dgeb',
        body: `
          <p>Well, it's been a good run folks.</p>
          <p>Thanks for the memories.</p>
        `,
        comments: [
          {
            id: '102',
            author: 'rwjblue',
            comment: `Too bad!`
          }
        ]
      }
    ];
  }
});
