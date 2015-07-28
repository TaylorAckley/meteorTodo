Template.user.helpers({
  name: function() {
    return Meteor.user().profile.name;
  }
});

Template.user.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});
