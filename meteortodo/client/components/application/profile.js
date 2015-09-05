Template.profile.helpers({
  profile: function() {
    console.log("hello?");
    return Meteor.user();
  },

  profile_services: function() {
    console.log("hello?");
    return Meteor.user().services;
  }

});
