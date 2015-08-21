Template.profile.helpers({
  profile: function() {
    console.log("hello?");
    return Meteor.user();
  },

  profile_services: function() {
    console.log("hello?");
    return Meteor.user().services;
  },

  fbPic: function() {
      // can use other formats like 'lll' too
      return "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
}

});
