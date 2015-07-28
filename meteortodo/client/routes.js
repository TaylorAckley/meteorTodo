Router.configure({
  layoutTemplate: 'applicationLayout',

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
