Router.onBeforeAction(function() {

  if (! Meteor.userId()) {
    this.redirect('/#auth');
  }
  else {
    this.next();
  }
},

{
  only: ['profile', 'home']
});

Router.onBeforeAction(function() {
  if (Meteor.userId()) {
    this.redirect('home');
  }
  else {
    this.next();
  }
},

{
  only: ['/']
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/register', function () {
    this.render('register');
});

Router.route('/', function () {
    this.render('login');
});

Router.route('/profile', function () {
    this.render('profile');

});
