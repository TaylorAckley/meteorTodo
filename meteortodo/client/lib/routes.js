Router.onBeforeAction(function() {
  var currentRoute = Router.current().route.getName();
  if (! Meteor.userId()) {
    this.render('login');
  }
  else if(currentRoute === ('login' || 'register') && Meteor.userId()) {
    this.render('home');
  }

  else {
    this.next();
  }
},

{
  only: ['profile', 'home']
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
