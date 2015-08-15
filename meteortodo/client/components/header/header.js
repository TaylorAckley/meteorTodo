Template.header.helpers({

});

UI.registerHelper("name", function() {
  return Meteor.user().profile.name;
});


Template.header.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }
});
